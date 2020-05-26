'use strict'

const { exec } = require('child_process')

exec('cat ~/Desktop/node/child-process-test.txt', (err, stdout, stderr) => {
  console.log('stdout', stdout)
  console.log('stderr', stderr)
})


const os = require('os')
const path = require('path')

const cwd = path.join(os.homedir(), 'Desktop', 'node')

exec('cat child-process-test.txt', {
  cwd
}, (err, stdout, stderr) => {
  console.log('stdout', stdout)
  console.log('stderr', stderr)
})
