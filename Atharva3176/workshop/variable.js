/*var test="hello"
console.log(test)
function newfunction(){
    var test="i am fine"
    console.log("inside the function",test)
}

newfunction();
console.log(test);
console.log(name);
var name="undefined"

const value1=10
var data1=10
var data1=20
console.log(data1);*/
const greet=()=>{
console.log("greetings")
}
greet();

const greetme=(name="Atharva")=>{
    console.log("greetings %s",name)
    }
    //greetme();
    greetme('Varad');
const say=(fname)=>{
    console.log(fname)
}

say('Atharva');
const cal=(one,two)=>{
    var ans=one+two;
    console.log(ans);
}

cal(10,20)
