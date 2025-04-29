// function5.js
let names = ["홍길동", "박춘식", "김민수", "이영식"];
let search = prompt("검색할 이름을 입력하세요.");
let check = 0;

for(let i = 0; i <= (names.length - 1); i++) {
  if (search == names[i]) {
    alert("중복된 값이 존재합니다.");
    check++;
    break;
  }
}

if (check == 0) {
  alert("없음");
}