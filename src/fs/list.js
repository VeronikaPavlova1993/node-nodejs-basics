import fs from 'node:fs';

const list = async () => {
 const path = './src/fs/files';
 const messageError = 'FS operation failed';

 fs.readdir(path, (err, data) => {
  if (!err) {
   console.log(data);
  } else {
   throw new Error(messageError);
  }
 });
};

await list();
