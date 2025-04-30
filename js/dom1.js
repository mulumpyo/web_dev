// dom1.js

let inputFruit;
let inputPrice;
let li = document.createElement("li");
let firstSpan = document.createElement("span");
let secondSpan = document.createElement("span");
let txtSpace = document.createTextNode(" ");
let newList = "";
let delBtn = document.createElement("button");

function createList(fName, fPrice) {
  firstSpan.innerText = fName;
  secondSpan.innerText = fPrice + "원";
  li.appendChild(firstSpan);
  li.appendChild(txtSpace);
  li.appendChild(secondSpan);
  li.appendChild(delBtn);

  return li;
};

function addCallBack() {
  inputFruit = document.getElementById('fruit').value;
  inputPrice = parseInt(document.getElementById('price').value).toLocaleString();

  if (!inputFruit || inputPrice == 0 || inputPrice == "") {
    alert("값을 입력하세요");
  } else {
    newList = createList(inputFruit, inputPrice);
    document.querySelector('#show > ul').appendChild(newList);
  
    document.getElementById('fruit').value = "";
    document.getElementById('price').value = 0;
  }
}

delBtn.innerText = "삭제";

delBtn.addEventListener('click', () => {
  delBtn.parentElement.remove();
});

document.getElementById('btn')
  .addEventListener('click', () => addCallBack());

document.querySelectorAll('#show ul button').forEach(item => {
  console.log(item);
  item.addEventListener('click', () => {
    item.parentElement.remove();
  });
});