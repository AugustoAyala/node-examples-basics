const buf = Buffer.from('hello world', 'utf8');

console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=

console.log(Buffer.from('test node buffer', 'utf8'));
// Prints: <Buffer 74 65 73 74 20 6e 6f 64 65 20 62 75 66 66 65 72>
console.log(Buffer.from('test node buffer', 'utf16le'));
// Prints: <Buffer 74 00 65 00 73 00 74 00 20 00 6e 00 6f 00 64 00 65 00 20 00 62 00 75 00 66 00 66 00 65 00 72 00>

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// Copies the contents of `arr`.
const buf1 = Buffer.from(arr);
// Shares memory with `arr`.
const buf2 = Buffer.from(arr.buffer);

console.log(buf1);
// Prints: <Buffer 88 a0>
console.log(buf2);
// Prints: <Buffer 88 13 a0 0f>

arr[1] = 6000;

console.log(buf1);
// Prints: <Buffer 88 a0>
console.log(buf2);
// Prints: <Buffer 88 13 70 17>

const buf3 = Buffer.from([1, 2, 3]);

for (const b of buf3) {
  console.log(b);
}
// Prints:
//   1
//   2
//   3