// object2.js

// let arr1 = [10, 20, 30];
// arr1[3] = 40;
// arr1.push(50);
// arr1.unshift(60);
// arr1.pop();
// arr1.pop();
// arr1.shift();

// arr1.forEach((item, idx, ary) => {
//   console.log(item, idx)
//   }
// );

// let result = arr1.some(item => item % 2 == 1);
// console.log(result);

// // console.log(arr1[4]);



let numAry = [];

for(let i = 0; i < 10; i++) {
  numAry.push(Math.floor(Math.random() * 40) + 10);
}

console.log(numAry.every(x => 10 <= x && x <= 50));

numAry.forEach((item) => {
  console.log(item);
});

console.log(numAry.filter((x) => {
  if (x % 2 == 0) {
    return true;
  }
}));