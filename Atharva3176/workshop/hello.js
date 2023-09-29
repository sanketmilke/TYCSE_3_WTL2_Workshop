var fs=require('fs')
var data=fs.readFileSync('./contain/first.txt')
console.log(data.toString())
console.log('reading is completed')