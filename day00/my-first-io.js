const fs = require('fs')

let content = fs.readFileSync(process.argv[2]).toString().split('\n')

// result kept on coming one index short
console.log(content.length - 1)

//optionally
//fs.readFileSync(process.argv[2], 'utf-8').split('\n')

//utf-8 can substitute .toString