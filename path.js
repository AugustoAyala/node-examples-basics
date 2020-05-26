'use strict'

const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// Returns: 'quux.html'

console.log(path.dirname('/foo/bar/baz/asdf/quux'));
// Returns: '/foo/bar/baz/asdf'

console.log(path.extname('index.html'));
// Returns: '.html'

console.log(path.extname('index.coffee.md'));
// Returns: '.md'

console.log(path.extname('index.'));
// Returns: '.'

console.log(path.extname('index'));
// Returns: ''

console.log(path.extname('.index'));
// Returns: ''

console.log(path.extname('.index.md'));
// Returns: '.md'

console.log(path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
}));
// Returns: '/home/user/dir/file.txt'

console.log(path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
}));
// Returns: '/file.txt'

console.log(path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
}));
// Returns: '/file.txt'

console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..'));  // true
console.log(path.isAbsolute('qux/'));     // false
console.log(path.isAbsolute('.'));        // false


console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// Returns: '/foo/bar/baz/asdf'
 
console.log(path.parse('/home/user/dir/file.txt'));
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

console.log(path.resolve('/foo/bar', './baz'));
// Returns: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'));
// Returns: '/tmp/file'
