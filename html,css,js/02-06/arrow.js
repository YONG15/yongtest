//함수의 호이스팅과 변수의 호이스팅은 다름

//함수표현식
const a = function(){
  console.log("aa");
}

//화살표 함수
const b = () => {console.log("bb")};
const c = () => console.log("cc");

const sum = (a, b) => {return a+b};
sum(3, 4);

//리턴 생략 가능
const sum2 = (a, b) => {a + b};
sum2(3, 4);

const asdf = (a) => a*a;
asdf(10);