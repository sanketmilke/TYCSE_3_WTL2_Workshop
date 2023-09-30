
const multiplication = (numberone, numbertwo) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (numberone < 0 || numbertwo < 0) {
                return reject("only positive numbers allowed");
            }
            resolve(numberone * numbertwo);
        }, 4000);
    });
}

multiplication(5, -2)
    .then((product) => {
        console.log(product);
    })
    .catch((error) => console.log(error));
