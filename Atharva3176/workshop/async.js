var fs=require('fs')
fs.readFile('./contain/first.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString())
});

console.log('Rerading is completed')
console.log('activity started')
setTimeout(()=>{
    console.log('Do Something')
},2000)

console.log('read completed')
