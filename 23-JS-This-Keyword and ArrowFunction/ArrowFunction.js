// Arrow functions allow us to write shorter function syntax:
let myFunction = (a, b) => a * b;
console.log("myFunction(2,3)", myFunction(2, 3));

// What About this?

// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are no binding of this.

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents the object that defined the arrow function.
