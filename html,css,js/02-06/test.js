// const StudentInfo = {
//   name: "이자룡",
//   age: 31,
//   address: "경기도 군포시",
//   family: ["나", "와이프", "고양이"],
//   skill: {
//     client: ["vue.js", "vanilla", "react"],
//     server: ["django", "php", "node.js"],
//     db: ["sqlite", "mongo", "mysql", "postgresql"],
//   },
//   sayHi: () => console.log("hi!!!!"),
// };

// StudentInfo.sayHi();

// const StudentInfo = {
//   name: String,
//   age: Number,
//   address: String,
//   family: Array,
//   skill: Object,
//   sayHi: Function,
// };

// const student1 = new StudentInfo();

// studentInfo.sayHi();

// class StudentInfo {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.address = "";
//   }
//   sayMyName() {
//     console.log(`my name is ${this.name}`);
//   }
//   setAddress(address) {
//     this.address = address;
//   }
//   getAddress() {
//     return this.address;
//   }
//   useMethod() {
//     this.sayMyName();
//   }
// }

// const student1 = new StudentInfo("jony", 30);
// const student2 = new StudentInfo("david", 50);
// student1.sayMyName();
// student1.setAddress("경기 군포시 산본동");
// console.log(student1.getAddress());
// student1.useMethod();

// const student1 = {//대규모 작업에서 이 방식은 비효율적 따라서 클래스를 쓴다
//   name: "",
//   age: -1,
//   address: "",
//   constructor: function (name, age) {//화살표함수로 this에 접근불가
//     this.name = name;
//     this.age = age;
//   },
//   sayMyName: function () {
//     console.log(`my name is ${this.name}`);
//   },
//   // sayMyName(){
//   //   console.log(`my name is ${this.name}`);
//   // }//축약
//   setAddress: (address) => (this.address = address),
//   getAddress: () => this.address,
//   useMethod: function () {
//     this.sayMyName();
//   },
// };

// student1.constructor("jony", 30);
// student2.constructor("david", 50);
// student1.sayMyName();
// student1.setAddress("경기 군포시 산본동");
// console.log(student1.getAddress());
// student1.useMethod();

// class Lawyer{
//   constructor(name, age, jaso) {
//     this.name = name;
//     this.age = age;
//     this.jaso = jaso;
//   }
//   introduce() {
//     console.log(`
//     이름: ${this.name}
//     나이: ${this.age}
//     자기소개: ${this.jaso}`);
//   }
// }
// const wo = new Lawyer("우영우", 27, "기러기 토마토 스위스 역삼역");
// const choi = new Lawyer("최수연", 27, "봄날의 햇살");
// wo.introduce();
// choi.introduce();

class Person {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  hello() {
    console.log(this.name);
  }
}
class Avengers extends Person{
  constructor(name, hp, power, skill) {
    super(name)
    this.name = name;
    this.hp = hp;
    this.power = power;
    this.skill = skill;
  }
  information (){
    console.log(this.name);
    console.log(this.hp);
    console.log(this.power);
    console.log(this.skill);
  }
  fly(){
    console.log("비행중");
  }
}
const h1 = new Avengers("헐크", 500, 20, "박수");
h1.information()
h1.fly();