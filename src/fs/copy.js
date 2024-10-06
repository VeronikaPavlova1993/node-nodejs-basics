import fs from 'node:fs';

const copy = async () => {
    const dirCopy = './src/fs/files_copy';
    const dirFile = './src/fs/files';
 fs.access(dirCopy, fs.constants.F_OK, (isPromiseResolve) => {
  if (isPromiseResolve) {
   fs.cp(dirFile, dirCopy, { recursive: true }, err => {
    if (err) throw new Error('FS operation failed');
   });
  } else {
   throw new Error('FS operation failed');
  }
 });
};

await copy();
