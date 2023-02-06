//백틱 (``)
const myname = "용효창";
//문자열 자바스크립트 혼합ok;
const intro = "제이름은" + myname + "입니다";
const intro2 = `제이름은${myname}입니다`;

//백틱은 엔터를 허용한다.
const hello = `안녕하세요
저는
치킨입니다`;

//insertAdjacentHTML 문자열로 된 html 태그를 집어넣기
const a = `
  <div class = "a">
    안녕하세요
  </div>
`;
document.querySelector("body").insertAdjacentHTML("beforeend", a);

const n = 10;
const sampleFunc = (n) => n * 10;
const a = n * 20;
const result = sampleFunc(10) + a;
console.log(result);

const func1 = (v1, v2) => v1 * v2;
const a = func1(4, 5) + func1(5, 6);
console.log(func1(1, 10) + a);
