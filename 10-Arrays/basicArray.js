const arr = ["hello", 1, "buddy"];
arr.push("where are you");
console.log("arr", arr);
console.log("typeof arr", typeof arr);

console.log("Array.isArray(arr); ", Array.isArray(arr));

arr.forEach((val) => {
  console.log(val);
});
