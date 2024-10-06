import fs from 'node:fs';

const rename = async () => {
 const pathFile = './src/fs/files/wrongFilename.txt';
 const pathRenameFile = './src/fs/files/properFilename.md';
 const messageError = 'FS operation failed';

 fs.access(pathRenameFile, fs.constants.F_OK, isPromiseResolve => {
  if (isPromiseResolve) {
   fs.rename(pathFile, pathRenameFile, err => {
    if (err) throw new Error(messageError);
   });
  } else {
   throw new Error(messageError);
  }
 });
};

await rename();
