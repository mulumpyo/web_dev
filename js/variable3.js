// variable3.js

let first_num, secoond_num;

first_num = parseInt(document.querySelector("#num1").value);  // parseInt : 자료형 정수로 변환
secoond_num = parseInt(document.querySelector("#num2").value);

//증감연산자
first_num %= secoond_num--;
console.log(secoond_num);
document.querySelector("#result").value = first_num;

// console.log(first_num);
// document.getElementById("result").value = first_num;