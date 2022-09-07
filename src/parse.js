
import * as fs from 'node:fs';

const file1 = JSON.parse(fs.readFileSync('file/file1.json', 'utf-8'));
const file2 = JSON.parse(fs.readFileSync('file/file2.json', 'utf-8'));

console.log(file1,file2);

export {file1, file2};