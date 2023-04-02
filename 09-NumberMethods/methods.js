let num = (124).toString();
console.log("num", num);
console.log("typeof num", typeof num);

let num1 = (143).toExponential();
console.log("num1", num1);
console.log("typeof num1", typeof num1);

let num2 = 123.123;

console.log("num2.toFixed(2)", num2.toFixed(2));
console.log("num2.toPrecision(3)", num2.toPrecision(3));

//
let x = new Number(5);
console.log("typeof x", typeof x);
let num5 = x.valueOf();
console.log("num5 ", typeof num5);

// explecit conversion
console.log("Number(new Date(2022-1-2)", Number(new Date("2022-1-2")));
