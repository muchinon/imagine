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


const bottles = [bottle1,bottle2];
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
for (let i = 0;  i <= 5; i+=3) {
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
login('berial','1234');



// Basic Arithmetic Operations
790 + 50;
0.9 - 0.1;
60 / 7
60 * 2;
15 % 4; // modulo

Math.round (45/24)

//Converting strings to numbers
Number ('2') + Number ('2') * Number ('6')



