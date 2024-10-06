import fs from 'node:fs';

const create = async () => {
    const path = './src/fs/files/fresh.txt';
    
 fs.access(path, fs.constants.F_OK, (isPromiseResolve) => {
  if (isPromiseResolve) {
   fs.writeFile(path, 'I am fresh and young', () => {});
  } else {
   throw new Error('FS operation failed');
  }
 });
};
await create();
