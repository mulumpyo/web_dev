// function8.js

// for...of는 값에 접근, forEach는 실행, filter는 추출입니다.

let data = JSON.parse(json);
let fields = ['id', 'first_name', 'gender', 'salary'];
let str = "";
// let btnTemplate = "<button class='btn btn-danger' ";


function makeTr(x = {}) {
  let trData = trStart;
  fields.forEach(field => { trData += tdStart + x[field] + tdEnd; });

  // for (let field of fields) {
  //   trData += tdStart + x[field] + tdEnd;
  // }

  trData += trEnd;
  return trData;
}

document.querySelector("#searchBtn")
  .addEventListener('click', () => {
    let searchValue = document.querySelector("#userValue").value;
    let list = "";
    data.forEach(x => {
      if (searchValue.toLowerCase() == x.gender.toLowerCase()) {
        list += makeTr(x);
      }
    });

    // for (let x of data) {
    //   if (searchValue.toLowerCase() == x.gender.toLowerCase()) {
    //     list += makeTr(x);
    //   }
    // }

    document.querySelector(".table > tbody").innerHTML = list;
  }
);

document.querySelector("#gender")
  ,addEventListener('change', () => {
    let selectValue = document.querySelector("#gender").value;
    let selectList = "";
    for (let x of data) {
      if (selectValue == x.gender.toLowerCase() || selectValue == 'all') {
        selectList += makeTr(x);
      }
    }
    document.querySelector(".table > tbody").innerHTML = selectList;
  }
);


str += tableStart + theadStart + trStart;

fields.forEach(x => { str += thStart + x + thEnd; });

// for(let i of fields) {
//   str += thStart + i + thEnd;
// }

str += trEnd + theadEnd + tbodyStart;

data.forEach(x => { str += makeTr(x); });

// for(let i of data) {
//   str += makeTr(i);
// }

document.writeln(str);