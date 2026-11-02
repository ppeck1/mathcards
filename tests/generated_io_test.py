"""Fault-injection checks for generated public-artifact writes, never user data."""
import contextlib
import errno
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'tools'))
import generated_io as io


class GeneratedIOTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.root = Path(self.directory.name)
        self.assertEqual(self.root.resolve().parent, Path(tempfile.gettempdir()).resolve())
        self.addCleanup(self.directory.cleanup)
        self.target = self.root / 'generated.json'

    def assert_clean(self):
        self.assertEqual({p.name for p in self.root.iterdir()}, {self.target.name})

    def test_identical_bytes_do_not_stage_replace_or_change_mtime(self):
        raw = 'δ = 1\n'.encode('utf-8')
        self.target.write_bytes(raw)
        modified = self.target.stat().st_mtime_ns
        with patch.object(io.tempfile, 'mkstemp', side_effect=AssertionError('Unchanged write staged')):
            self.assertFalse(io.write_generated(self.target, 'δ = 1\n'))
        self.assertEqual(self.target.stat().st_mtime_ns, modified)
        self.assertEqual(self.target.read_bytes(), raw)
        self.assert_clean()

    def test_new_utf8_file_replaces_from_same_directory_and_keeps_lf_bytes(self):
        destination = self.root / 'nested' / 'artifact.html'
        raw = '<main>μ − δ</main>\n'.encode('utf-8')
        replace = io.os.replace
        seen = []

        def inspect(source, target):
            self.assertEqual(Path(source).resolve().parent, destination.resolve().parent)
            self.assertEqual(Path(source).read_bytes(), raw)
            self.assertFalse(destination.exists())
            seen.append(source)
            return replace(source, target)

        with patch.object(io.os, 'replace', side_effect=inspect):
            self.assertTrue(io.write_generated(destination, raw))
        self.assertEqual(destination.read_bytes(), raw)
        self.assertEqual(len(seen), 1)
        self.assertEqual(list(destination.parent.iterdir()), [destination])

    def test_transient_windows_replace_retries_without_truncating_previous_artifact(self):
        self.target.write_bytes(b'previous\n')
        replace = io.os.replace
        attempts, delays = [], []

        def transient(source, target):
            attempts.append(source)
            self.assertEqual(self.target.read_bytes(), b'previous\n')
            if len(attempts) < 3:
                raise OSError(errno.EINVAL, 'injected Windows generated-file sharing failure')
            return replace(source, target)

        with patch.object(io, '_WINDOWS', True), patch.object(io.os, 'replace', side_effect=transient), patch.object(io.time, 'sleep', side_effect=delays.append):
            self.assertTrue(io.write_generated(self.target, b'completed\n'))
        self.assertEqual(len(attempts), 3)
        self.assertEqual(delays, [.1, .2])
        self.assertEqual(self.target.read_bytes(), b'completed\n')
        self.assert_clean()

    def test_persistent_windows_failure_propagates_after_three_attempts_and_cleans_staging(self):
        self.target.write_bytes(b'previous\n')
        failure = PermissionError(errno.EACCES, 'injected persistent sharing failure')
        delays = []
        with patch.object(io, '_WINDOWS', True), patch.object(io.os, 'replace', side_effect=failure) as replace, patch.object(io.time, 'sleep', side_effect=delays.append):
            with self.assertRaises(PermissionError) as raised:
                io.write_generated(self.target, b'not published\n')
        self.assertIs(raised.exception, failure)
        self.assertEqual(replace.call_count, 3)
        self.assertEqual(delays, [.1, .2])
        self.assertEqual(self.target.read_bytes(), b'previous\n')
        self.assert_clean()

    def test_partial_staging_failure_keeps_previous_file_and_closes_temporary_handles(self):
        self.target.write_bytes(b'previous\n')
        fdopen = io.os.fdopen
        failure = OSError(errno.EINVAL, 'injected failed partial staging write')

        @contextlib.contextmanager
        def partial(descriptor, mode):
            with fdopen(descriptor, mode) as stream:
                class BrokenStream:
                    def write(self, data):
                        stream.write(data[:2])
                        raise failure
                yield BrokenStream()

        with patch.object(io, '_WINDOWS', True), patch.object(io.os, 'fdopen', side_effect=partial), patch.object(io.os, 'replace', side_effect=AssertionError('Incomplete bytes published')), patch.object(io.time, 'sleep'):
            with self.assertRaises(OSError) as raised:
                io.write_generated(self.target, b'never publish a prefix\n')
        self.assertIs(raised.exception, failure)
        self.assertEqual(self.target.read_bytes(), b'previous\n')
        self.assert_clean()

    def test_unrelated_or_non_windows_errors_are_not_retried(self):
        self.target.write_bytes(b'previous\n')
        for windows, code in [(True, errno.EIO), (False, errno.EINVAL), (False, errno.EACCES)]:
            failure = OSError(code, 'injected non-retryable error')
            with self.subTest(windows=windows, code=code):
                with patch.object(io, '_WINDOWS', windows), patch.object(io.os, 'replace', side_effect=failure) as replace, patch.object(io.time, 'sleep') as sleep:
                    with self.assertRaises(OSError) as raised:
                        io.write_generated(self.target, b'never published\n')
                self.assertIs(raised.exception, failure)
                self.assertEqual(replace.call_count, 1)
                sleep.assert_not_called()
                self.assertEqual(self.target.read_bytes(), b'previous\n')
                self.assert_clean()

    def test_known_windows_sharing_error_code_is_recognized_without_errno(self):
        failure = OSError('injected Windows sharing violation')
        failure.winerror = 32
        with patch.object(io, '_WINDOWS', True):
            self.assertTrue(io._transient(failure))
        with patch.object(io, '_WINDOWS', False):
            self.assertFalse(io._transient(failure))


if __name__ == '__main__':
    unittest.main()
