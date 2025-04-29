// function3exe.js
function max(x, y) {
  if (x == y) {
    console.log("두 수의 크기가 같습니다.")
  } else {
    x > y ? console.log(`2개의 숫자중에서 큰값은 ${x}입니다.`) : console.log(`2개의 숫자중에서 큰값은 ${y}입니다.`);
  }
}

function sumUpTo(x) {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    result += i;
  }
  console.log(`1부터 ${x}까지의 합은 ${result}입니다.`)
}

function diff(x, y) {
  let result;
  x > y || x == y ? result = x - y : result = y - x;
  console.log(`두수의 차는 ${result}입니다.`);
}

max(10, 17);
sumUpTo(5);
diff(17, 34);
