'use strict'

const fs = require('fs')
const { Console } = require('console')

console.log('hello world')
console.log('hello %s', 'world')
console.error(new Error('Whoops, something bad happened'))

const name = 'Will Robinson'
console.warn(`Danger ${name}! Danger!`)

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput });

const count = 5;
logger.log('count: %d', count);

console.assert(true, 'does nothing');

console.assert(false, 'Whoops %s work', 'didn\'t');

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
