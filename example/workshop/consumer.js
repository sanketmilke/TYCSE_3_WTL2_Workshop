const greet=require('./procedure')
greet.sayhi('mandar')
greet.saybye('Atharva')

const os=require('os')
const user=os.userInfo()
console.log(user)