import fs from 'node:fs';

const remove = async () => {
 const path = './src/fs/files/fileToRemove.txt';
 const messageError = 'FS operation failed';

 fs.rm(path, { recursive: true }, err => {
  if (err) throw new Error(messageError);
 });
};

await remove();
