import fs from 'node:fs';

const read = async () => {
 const path = './src/fs/files/fileToRead.txt';
 const messageError = 'FS operation failed';

 fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
   throw new Error(messageError);
  } else {
   console.log(data);
  }
 });
};

await read();
