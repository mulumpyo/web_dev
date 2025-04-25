// variable1.js

let name = "김대환";
let name1 = "홍길동";
name = "홍길동";

console.log(name + " " + name1);

let item = document.querySelector("#userValue");
console.log(item);
name += " " + item.value;
console.log(name)