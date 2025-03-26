// const number = 12;

// if (number > 10) console.log(`Number is pigger than 10`);
// else console.log(`Number is smaller than 10`);

// const { name, familyName } = require('./variables.js');

// console.log(name, familyName);

// console.log(__filename);

// module.exports.items = ['item1', 'item2'];

// console.log(items);

// const OS = require(`node:os`);

// console.log(OS.arch());
// console.log(OS.cpus());
// console.log(OS.type());

// // import path from 'node:path';
// const path = require('node:path');

// console.log(path.sep);

const { readFileSync, writeFileSync } = require(`node:fs`);

const fileContent = readFileSync(`./first.txt`, `utf-8`);

console.log(fileContent);
writeFileSync(`./result.txt`, `Here is the result: ${fileContent}`);
