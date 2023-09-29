const{readFileSync,writeFileSync}=require('fs')
const one=readFileSync('./contain/first.txt','utf-8')
const two=readFileSync('./contain/second.txt','utf-8')
console.log(one)
console.log(two)
const combine=one+two;
writeFileSync('./contain/result.txt',combine)
writeFileSync('./contain/result.txt',`${one} ${two}`)
var arr=['cat','dog','bat'];
console.log(arr);
console.log(arr[0])