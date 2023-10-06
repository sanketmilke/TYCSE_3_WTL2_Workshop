
// const multiplication=(numberOne, numberTwo)=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(numberOne<0 || numberTwo<0){
//             return reject("Only positive numbers are allowed")
//             }
//          resolve(numberOne*numberTwo)
//         }, 2000)
//     })
// }

//Excercise 1

// multiplication(5,2).then((product)=>{
//     console.log(product)
// }).catch((error)=> console.log(error))

// let arr=[10,20,30,40,50];
// let sum=0;
// const arrSum=(zero,one,two,three,four) => {
//     return new Promise((resolve,reject) => {
//            if(arr.length<4){
//             return reject("Array elements are less than 5")
//            }
//            else{
//              for(let i=0; i<arr.length; i++){
//                 sum+=arr[i];
//              }
//              resolve(sum)
//            }
//     })
// }

// arrSum(arr).then((sum)=> {
//     console.log(sum)
// }).catch((error)=> console.log(error))


//Excercise 2

// let num=Math.random();
//  const randomCheck=(num) => {
//      return new Promise((resolve,reject) => {
//             if(num<6){
//              return reject("Random Num is less than 6")
//            }
//             else{
//              resolve(num)
//             }
//      })
//  }

//  randomCheck(num).then((num)=> {
//      console.log(num)
//  }).catch((error)=> console.log(error))

