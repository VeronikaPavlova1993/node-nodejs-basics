import fs from 'node:fs';

const read = async () => {
    const path = './src/streams/files/fileToRead.txt';
    
    fs.createReadStream(path).pipe(process.stdout);
};

await read();