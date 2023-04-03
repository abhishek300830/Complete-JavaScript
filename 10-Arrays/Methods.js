const fruits = ["Banana", "Orange", "Apple", "Mango"];

const string = fruits.toString();

console.log("string", string);
console.log("typeof string", typeof string);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
fruits2.push("Kiwi");
fruits2.shift();
fruits2.unshift("hello");

const string2 = fruits2.join("*");
console.log("string2 ", string2);
console.log("typeof string2", typeof string2);

// concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log("myChildren ", myChildren);

// flat
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log("myArr ", myArr);
console.log("newArr ", newArr);
