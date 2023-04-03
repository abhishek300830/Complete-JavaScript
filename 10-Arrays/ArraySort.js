const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log("fruits", fruits);
fruits.reverse();
console.log("reverse", fruits);

const nums = [90, 59, 32, 10, 100, 110];
nums.sort((a, b) => {
  return a - b;
});
console.log("nums ", nums);
console.log("math.random() ", Math.random());
console.log("Math.floor(10.20)", Math.floor(10.2));
console.log("Math.floor(Random)", Math.floor(Math.random() * 10));
console.log("Math.ceil()", Math.ceil(Math.random()));
console.log("Math.ceil()", Math.ceil(Math.random() * 10));

//max
console.log("maths.max", Math.max.apply(null, nums));
console.log("maths min ", Math.min.apply(null, nums));
