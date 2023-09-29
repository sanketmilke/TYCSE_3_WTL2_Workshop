/*const multiplication=(numberone,numbertwo)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(numberone<0 || numbertwo<0){
                return reject("only positive numbers allowed")
            }
            resolve(numberone*numbertwo)
        },4000)
    })
}

multiplication(5,2).then((product)=>{
    console.log(product)
}).catch((error)=>console.log(error))*/
/*var numbers = [1, 2, 3, 4] 
    var Sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        Sum += numbers[i]
    }

console.log(Sum);*/

/*const sumNumbers = (numbers) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numbers.length < 5) {
                return reject("only positive numbers allowed")
            }
            var Sum = 0;
            for (var i = 0; i < numbers.length; i++) {
                Sum += numbers[i]
            }
            resolve(Sum)
        }, 4000)
    })
}

var numbers = [1, 2, 3, 4]
sumNumbers(numbers)
    .then((Sum) => {
        console.log(Sum)
    })
    .catch((error) => console.log(error))*/


    function generateRandomNumber() {
        return new Promise((resolve, reject) => {
          const randomNumber = Math.random()*10; // Generates a random number between 1 and 10
      
          if (randomNumber<6) {
            resolve(randomNumber);
          } else {
            reject("Error: Random number is not greater than 6");
          }
        });
      }
      
      generateRandomNumber().then((randomNumber) => {
          console.log('Generated random number:',randomNumber);
        })
        .catch((error) => {
          console.error(error);
        });
      