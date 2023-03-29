let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("where");
console.log("Index", index);

let lastIndexof = text.lastIndexOf("locate");
console.log("last Index ", lastIndexof);

let newtext = "hello bro how are you";

// let myArr = newtext.match(/o/g);
let myArr = newtext.matchAll("o");

console.log("myArr " + Array.from(myArr));
