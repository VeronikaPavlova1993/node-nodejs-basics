import os from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
 const data = [...Array(os.availableParallelism()).keys()].map((elem) => {
  return new Promise((resolve, reject) => {
   const worker = new Worker('./src/wt/worker.js', {
    workerData: elem + 10,
   });
   worker.on('message', (data) => {
    resolve({
     status: 'resolved',
     data,
    });
   });
   worker.on('error', () => {
    reject({
     status: 'error',
     data: null,
    });
   });
  });
 });

 console.log(await Promise.all(data));
};

await performCalculations();
