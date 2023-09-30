const profile={
    fname: 'Abhishek',
    lname: 'Pawar',
    email: 'abhishekpawar7218@gmail.com'
}
const firstName = profile.fname;
const lastName = profile.lname;
const emailID = profile.email;

// console.log(firstname);
// console.log(lastname);
// console.log(emailID);

const {firstName:fname, lastName:lname, emailID: email} = profile
console.log(firstName);
console.log(lastName);
console.log(emailID);