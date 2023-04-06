const set = new Set();

set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(40);
set.delete(10);

console.log("set.has(30)", set.has(30));
console.log("set ", set);

const num = [1, 2, 3];
num.forEach((value, idx, arr) => {
  num[idx] = value * 10 + idx;
});

const num3 = num.map((value, idx) => {
  num[idx] = value * value;
  return Math.pow(value, value);
});

const num2 = num.filter((value) => value > 20);
console.log("num", num);
console.log("num2", num2);
console.log("num3", num3);
