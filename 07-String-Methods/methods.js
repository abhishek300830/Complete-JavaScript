let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len = text.length;

let text1 = text.slice(2, 23);
console.log("text1 ", text1);

let text2 = text.substring(2, 20);
console.log("text2 ", text2);

let text3 = text.substr(2, 2);
console.log("text3 ", text3);

let replacetext = "hello abhishek how are you";

let reptext = replacetext.replace("hello", "hey");
console.log(reptext);

let lowercase = "lklgfdsgd";
let uppercase = lowercase.toUpperCase();
console.log(uppercase);

let abc = "hello";
let arr = abc.split("");
console.log(arr);
