typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof NaN; // Returns "number"
typeof false; // Returns "boolean"
typeof [1, 2, 3, 4]; // Returns "object"
typeof { name: "John", age: 34 }; // Returns "object"
typeof new Date(); // Returns "object"
typeof function () {}; // Returns "function"
typeof myCar; // Returns "undefined" *
typeof null; // Returns "object"

// constructor
"John".constructor(
  // Returns function String()  {[native code]}
  3.14
).constructor; // Returns function Number()  {[native code]}
false.constructor[(1, 2, 3, 4)].constructor; // Returns function Boolean() {[native code]} // Returns function Array()   {[native code]}
new Date().constructor; // Returns function Date()    {[native code]}

// Difference between undefined and null
typeof undefined; // undefined
typeof null; // object

null === undefined; // false
null == undefined; // true
