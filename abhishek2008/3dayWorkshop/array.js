var arr = ['cat', 'goat', 'bat'];
console.log(arr);
console.log(arr[1]);
arr.forEach((item)=>{
    console.log(item);
})
arr.pop('cat');
console.log(arr);

// var cat = arr[0];
// console.log(cat)

// var arr1 = arr.map((animalName)=>animalName=animalName.toUpperCase());
// console.log(arr1);

// arr1.push('HORSE')
// console.log(arr1)

// arr2 = arr1.filter((element)=>element.length<4);
// console.log(arr2);

// const profile = ['Sushrut', 'Lekurwale', 'TY-2']
// const [fname, lname, div] = profile;
// console.log(fname);
// console.log(lname);
// console.log(div);

const profile = ['Sushrut', 'Lekurwale', 'TY-2']
const [...details] = profile;
// console.log(fname);
console.log(details);


