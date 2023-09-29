var arr=['cat','dog','bat'];
console.log(arr);
console.log(arr[0]);
arr.forEach((element)=>{
    console.log(element)
})

var array=arr.map((animal)=>animal=animal.toUpperCase())
console.log(array)

array.push('Horse')
console.log(array)
var array1=array.filter((element)=>element.length<4)
console.log(array1)
const profile=['Atharva','Shengule','atharva@gmail.com']
const [firstname,lastname,email]=profile;
console.log(firstname)
console.log(lastname)
console.log(email)

const profile1=['Atharva','Shengule','atharva@gmail.com'];
const [firstname1,...details]=profile1;
console.log(firstname1)
console.log(details)

/*array.shift('Horse')
console.log(array)*/

array.pop('Horse')
console.log(array)

const myGirls = ["A", "B"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)
