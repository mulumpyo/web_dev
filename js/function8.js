// function8.js


let data = JSON.parse(json);

let fields = ['id', 'first_name', 'gender', 'salary'];

let str = "";

function makeTr(x = {}) {
  for (let field of fields) {
    return x[field];
  }
}

str += tableStart + theadStart + trStart;

for(let i of fields) {
  str += thStart + i + thEnd;
}

str += trEnd + theadEnd + tbodyStart;

for(let i of data) {
  str += trStart;
  str += makeTr(i);
  str += trEnd;
}

console.log(str);