// function4.js

// let numAry = [10, 20, 30, 50, 70, 90, 110, 0];

// let sum = 0;

// for (let i = 0; i < numAry.length; i++) {
//   if (i % 2 == 0) {
//     sum += numAry[i];
//   }
//   if (numAry[i] > 50) {
//     numAry[7] += numAry[i];
//   }
// }

// console.log(sum);
// console.log(numAry[7]);

let ages = [110, 39, 25, 30, 31, 38];
let maxValue = ages[0];
let minValue = ages[0];


function getMax(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function getMin(x, y) {
  if (x > y) {
    return y;
  } else {
    return x;
  }
}

function getMinValue(x = []) {
  let min = x[0];
  for (let i = 0; i <= (x.length - 1); i++) {
    if (min > x[i]) {
      min = x[i];
    }
  }
  return min;
}

for (let i = 0; i <= (ages.length - 1); i++) {
  maxValue = getMax(maxValue, ages[i]);
  minValue = getMin(minValue, ages[i]);
} 

console.log(`${maxValue} 이 제일 많은 나이입니다.`);
console.log(`${minValue} 이 제일 적은 나이입니다.`);


console.log("결과는 " + getMinValue([20, 27, 17, 30, 15]));
