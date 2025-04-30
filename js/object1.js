// object.js

let obj = {
  name: "홍길동",
  age: 20,
  showName: () => {
    return `이름은 ${this.name}입니다.`
  },
  setName: (name) => {
    this.name = name;
  }
};

obj.setName("김길동");
// let result = obj.showName();
// console.log(result);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {
    return `이름은 ${this.name}입니다.`
  }
  setName(name) {
    this.name = name;
  }
}

let choi = new Person("최민식", 22)

console.log(choi.showName());

choi.setName("최민수");
console.log(choi.showName());