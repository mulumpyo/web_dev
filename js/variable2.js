// variable2.js

let = num = 100;
console.log(typeof num);
num = "hundred";
console.log(typeof num);

let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date();

console.log(birthOfDate);
console.log(typeof birthOfDate);


let isOk = true;
isOk = 10 < 5;

if (isOk) {
  console.log("참");
} else {
  console.log("거짓");
}

let baeyul = [10, 20, 25, 31];
console.log(baeyul[0]);

if (baeyul[0] == 10) {
  console.log("0위치 배열값 10");
}

let stringArry = ["Hello", "Nice", "Good"];

console.log(typeof baeyul)

console.log(typeof stringArry)


let obj = {
  name: "김대환",
  age: 26,
  gender: 'M',
  contry: "KR",
  personinfo: function() {
    console.log('이름은 ' + obj.name + '이고 나이는 ' + obj.age + '입니다.');
  }
}; //json 데이터


obj.personinfo();

console.log(obj);
console.log(typeof obj);

console.log(obj.name);

let whatIsThis;
console.log(typeof whatIsThis);
whatIsThis = document.querySelector("userValue");
console.log(typeof whatIsThis);



/* 
  변수 선언 후 값을 대입하지 않으면 undefine
  쿼리 셀렉터를 사용하여 값을 가져올 경우 속성이 key값, 속성 내부 값이 value값
*/