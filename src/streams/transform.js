import { Transform } from 'node:stream';
import stream from 'stream/promises';

const transform = async () => {
 console.log('Please, enter the text');

 const transformData = new Transform({
  transform(chunk, encoding, callback) {
   callback(null, `${[...chunk.toString()].reverse().join('')}\n`);
  },
 });

 stream.pipeline(process.stdin, transformData, process.stdout);
};

await transform();
