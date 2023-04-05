const nums = [90, 59, 32, 10, 100, 110];

nums.forEach((val, idx, arr) => {
  console.log("val ", (val = val + 10));
  console.log("idx ", idx);
  console.log("arr", arr);
});
console.log("nums", nums);

// map create new copy
const num2 = nums.map((value, idx, array) => {
  return value * 2;
});

console.log("nums2", num2);

// filter

const filteredArray = num2.filter((val) => {
  return val > 100;
});
console.log("filteredArray", filteredArray);

// reduce

const reduce = filteredArray.reduce((prev, curr, idx, array) => {
  //   console.log("array", array);
  return prev + curr;
});

console.log("reduce ", reduce);

// arrays const
// it is a good practice to declare array with const
