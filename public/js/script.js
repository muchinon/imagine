const btn = document.getElementById('btn');
btn.onclick = function () {
  const name = prompt('Enter your full name');
  document.getElementById('name').innerText = name;
}

//Variables
const pi = 3.14;
let username = 'berial';
let age = 12;
let present = false;

// Objects
const person = {
  username: 'berial',
  age: 12,
  present: false,
  child: {
    name: 'Duster',
    age: 200,
    friend: {
      name: 'Cockroach',
      age: 4000

    }

  }
}
console.log(person.username);
person.age = 29;
console.log(person);


const bottles = [bottle1, bottle2];
bottles.push(bottle1);
bottles;

bottles[0];
bottles[1].color;

const date = new Date();
date.toString();

// if/else
// const age = 18;
if (age >= 18) {
  'You are true';
} else {
  'You are false';
}

// For loop
for (let i = 0; i <= 5; i += 3) {
  console.log('We did it!', i)
}


// Functions
//Defining a function
function login(username, password) {
  // validate the username and password
  if (!username || !password) {
    return 'user lock in status not provided';
  }
  // verify username and password
  if (username == 'berial' && password == '1234') {
    return 'user is locked in';
  } else {
    return 'Youre definitely not locked in';
  }
}

//invoking a function
login('berial', '1234');



// Basic Arithmetic Operations
790 + 50;
0.9 - 0.1;
60 / 7
60 * 2;
15 % 4; // modulo

Math.round(45 / 24)

//Converting strings to numbers
Number('2') + Number('2') * Number('6')

// Strings in JavaScript
// Concatenation
const firstname = 'Felix';
const lastname = 'Kojo';
const middlename = '';

firstname + ' ' + lastname;

// Template literal
`${firstname} ${middlename} ${lastname}`;

//String Methods

let fullName = 'Felix Kojo'
fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(3)
fullName.slice(0, 5)
fullName.split("")
fullName.replace("Kojo", "Cefa")
fullName.indexOf("Kojo")

//string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
console.log(`GHS$(amount)`)
amount.toString()


// Write a function that will add a participant to our Google Classroom
// let email = prompt ('Enter email')
// let passcode = prompt ('Enter passcode')


const participants = [];
function addParticipant(email) {
  // Check if email was provided you can also use (!email - not email)
  if (email === undefined || email === null) {
    return 'No email Provided'
  }

  // Check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided'
  }

  // Add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('mickeymond@yahoo.com');
addParticipant('mickeymoused@yahoo.com');
addParticipant();
participants;


// // Arrays in JavaScript

// const users = [
//   {
//     username: 'koko',
//     password: '12234',
//     email: 'koko@gmail.com'

//   },

//   {
//     username: 'croco',
//     password: '123234',
//     email: 'croco@gmail.com'

//   }
// ];


// // Write a function that will take a user with firstname, lastname and return fullname;

// Array Methods in JavaScript

function fullName(user) {
  return {
    ...user,
      fullName: `${user.firstname} ${user.lastname}`
  };
}

const user = {
firstname: 'Blac',
lastname: 'Drax'
}
fullName (user);

// Array map
const users = [
{firstname: 'Blac', lastname: 'Monster'},
{firstname: 'Opiod', lastname: 'Grinder'},
{firstname: 'lopiod', lastname: 'Under'},
{firstname: 'Above', lastname: 'Joestar'},
{firstname: 'Luffy', lastname: 'Perndrakon'},
]

users.map(fullName);

// Square of Numbers

function square (number) {
return number ** 2;
}

square(9)

const numbers = [9,6,3,8,5];
numbers.map(square)

// Array filter
function isEven(number) {
return number % 2 === 0;
}

isEven(9)
numbers.filter(isEven);


// Write a function that will allow a user to reset their password

// const user = {
//   email: 'kokomoney@gmail.com',
//   password: '1234'
// }

// function resetPassword (password){
//   if (password === '1234'){
//     return 'Login Password'
//   }
//   else {
//     return 'Reset password'
//   }
  
  
// }

// resetPassword ('2345')

function resetPassword(email, newPassword){
  // Check if email and new password was provided
    if (!email || !newPassword){
      return 'Email or password not provided';
    }
    // 
    if (email === user.email){
      user.password =newPassword;
      return 'Password reset successful'
    }
  
  // Check if provided email is correct
  if (email !== user.email) {
    return 'Incorrect email'
  }
    
  }
  
  
  user;
  resetPassword('kokomoney@gmail.com', 6790);
  user;


  //  You have been given an array of students with some of them marked as absent and others marked as present.

//  Write a function the returns the total number of students present

const students = [
  {id: 1, present:true},
  {id: 2, present:true},
  {id: 3, present:false},
  {id: 4, present:true},
  {id: 5, present:false},
]

function studentsPresent(students) {
  // Define a variable to track the total present
  let total = 0
  // Begin a loop
  for (let i=0; i < students.length; i++){
    // For any iteration if students is present then increase total present by 1;
    if (students[i].present){
      total++
    }
  }
  // return total present
  return total;
}

studentsPresent(students)

// Classes in JavaScript
class Laptop {
  constructor(brand, color){
    this.brand = brand;
    this.color = color;
  }
}

const laptop1 = new Laptop('Dell', 'black');
const laptop2 = new Laptop('HP', 'silver')
laptop1.brand;
laptop2.brand;






