const num = 10;

if (num > 11) {
  console.log("Hello Workd");
} else {
  console.log("else condition");
}

switch (num) {
  case 10:
    console.log("This is 10");

    break;

  default:
    break;
}

// for in
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
console.log("text", text);

const person1 = ["hello", "hwo", "are", "you"];

let text1 = "";
for (let x in person1) {
  text1 += person1[x];
}
console.log("text1", text1);

// for each

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
console.log("txt", txt);

// for of
const cars = ["BMW", "Volvo", "Mini"];

let text10 = "";
for (let x of cars) {
  text10 += x;
}
console.log("text10", text10);
