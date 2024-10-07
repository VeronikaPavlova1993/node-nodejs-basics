import fs from 'node:fs';
import crypto from 'node:crypto';

const calculateHash = async () => {
 const path = './src/hash/files/fileToCalculateHashFor.txt';
 const hash = crypto.createHash('sha256');
 const stream = fs.createReadStream(path);
 stream.on('data', (chunk) => {
  hash.update(chunk);
 });
 stream.on('end', () => {
  console.log(hash.digest('hex'));
 });
};

await calculateHash();
