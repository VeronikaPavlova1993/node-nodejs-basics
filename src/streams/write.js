import { createWriteStream } from 'node:fs';
import stream from 'stream/promises';

const write = async () => {
 const writeStream = createWriteStream('./src/streams/files/fileToWrite.txt');
 console.log('Enter the data to record to the file');

 await stream.pipeline(process.stdin, writeStream);
};

await write();
