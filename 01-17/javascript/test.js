console.log("hello");
// 자바스크립트는 선언할때 타입을 지정하지 않음
// 배정될때 자동으로 타입 정해짐
const a = 1;
let b = 1;

// 선언자(let, const, var) 안써도 작동은 되지만
// 디버깅때문에 꼭 선언자 붙여야 함
// var : 안씀
// let : 안씀,값변경이 필요하면 사용(for문에서 i,j)
// const : 이걸 쓰자 하지만 만약 안되면 let쓰면됨,값변경 안됨

//원시자료형: number(int,doble,float없음), string(char없음, 모두 ""사용),
//           Boolean(true,false), null(의도적으로 비움), undefined(의도하지않았는데 비어있음)
//참조자료형: Array, Object, Function

function addOne(n) {
  return n + 1;
}
addOne(2);
function numToString(n) {
  return String(n);
}
function stringToNum(text) {
  return Number(text);
}
const c = numToString(2);
const d = stringToNum("2");

//함수표현식 : 함수를 변수에 저장
const sampleFunc = function () {
  return 1;
};
const result = sampleFunc();
console.log(result);

//자바스크립트에서 중요한것 1.객체 2.함수 3.배열
//객체 : key 와 value로 이루어진 property의 모음
const person = {
  name : "이자룡",
  dateOfBirth: 1993,
  familyMembers:["아빠", "엄마", "할머니"],
  job: "싸피 강사",
  isMerriaged: true,
}
console.log(person.familyMembers[1]);

person.name = "랄랄라"; //가능함!! const로 선언되도 배열이랑 객체의 요소는 바꿀 수 있다!
// property추가도 가능

const arr = [1, 2, 3];
arr = [4, 5, 6];//err!! 아예 새로 만드는건 안됨

//문자열 연산(파이썬처럼)
const str1 = "abc"+"bbq";//"abcbbq"
const str2 = "bbq"+10;//"bbq10"
str1.length//6
str2.length//5
const arr2 = [1,2,3,4,5];
console.log(arr.length)//5

//비교연산
// 1 == '1' ->true (타입 달라도 true)(잘 안씀)
//1 === '1' ->false (타입 같아야 true)(이것만 씀)

//for ,while문
//i선언할때 let선언자 사용!

//arr.push(n); 가능!