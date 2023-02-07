const datas = [0, 1, 2, 3, 4];
const accResult = datas.reduce((acc, cur)=>{
  console.log(acc,cur);
  return acc+cur;
}, 1);

console.log(accResult);


const studentInfo = [
  {
    name:"jony",
    age: 30
  },
  {
    name:"sylvie",
    age: 30
  },
  {
    name:"nana",
    age: 1
  }
]

//name만 가진 새배열을 reduce로 만들어라
const newStudentInfo = studentInfo.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []);
console.log(newStudentInfo);

//age가 30인것의 이름만 골라라 reduce로
const over30names = studentInfo.reduce((acc, cur) => {
  if(cur.age===30)acc.push(cur.name);
  return acc;
}, []);
console.log(over30names);
