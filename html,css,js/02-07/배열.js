//1.forEach~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//배열 메소드 Array.함수(콜백함수)
// addEventListner('click', function(){})
//Array.forEach

const arr = [1,2,3,4];
arr.forEach((value) => {
  console.log(value);
})
const test = (value) => {console.log(value)};
arr.forEach(test);

const arr2 = [4,3,5,1,6,5];
let cnt = 0;
arr2.forEach((value) => {
  if(value%2===1){
    cnt++
  }
})
console.log(cnt);

const arr3 = [-5,3,4,2,-7,-2,7];
const pplus = [];
const mminus = [];
arr3.forEach(value =>{
  if(value<0){
    mminus.push(value);
  }
  else if(value>0){
    pplus.push(value);
  }
})
console.log(pplus);
console.log(mminus);

//2.some,every~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const arr4 = [1,2,3,4,5];
//some:하나의 조건만 만족해도 true
//every:모든조건 만족해야 true
const result1 = arr4.some(element => element<0); //flase
const result2 = arr4.some(element => element > 4); //true

const everyResult1 = arr4.every(element => element>0);//true
const everyResult2 = arr4.every(element => element>3);//false

//4.find, findindex~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const arr5 = [1,2,3,4,5];
const inventory = [
  {name: "A", quantity:1},
  {name: "B", quantity:2},
  {name: "C", quantity:3},
]
//find:해당하는 배열의 값을 가져온다
const result11 = arr5.find(element => element>4);
console.log(result11)
const result22 = inventory.find(element => element.name === "B");
console.log(result22)
//findindex:해당하는 index를 가져온다
const result33 = inventory.findIndex(li => li.name === "B");
console.log(result33);

//도전
const chicken = [
  {name: "머리", quantity:1},
  {name: "날개", quantity:2},
  {name: "닭다리", quantity:2},
  {name: "닭가슴살", quantity:1},
  {name: "닭발", quantity:2},
]
const drum = chicken.find(li => li.name==="닭다리");
const drumI = chicken.findIndex(li => li.name==="닭다리");
console.log(drum);
console.log(drumI);


//5.map~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const arr6 = [1,2,3,4,5,6];
const result111 = arr6.map(data => {data}); //undefined
const result222 = arr6.map(data => data);
const result333 = arr6.map(data => {return data});

//도전
const arr7 = [1,2,3,4,5];
const result444 = arr7.map(data => data*data);
const arr8 = ["a","bcd","ef","g"];
const result555 = arr8.map(data => data.length);

//6.filter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const arr9 = [3,5,4,2];
const filteredarr = arr9.filter(data => data > 3);

//도전
const bucket = [
  {
    id:1,
   text:"여행가기",
    done: false,
  },
  {
    id:2,
   text:"치킨먹기",
    done: true,
  },
  {
    id:3,
   text:"코딩 하기",
    done: true,
  },
  {
    id:4,
   text:"요리 하기",
    done: false,
  },
]
const filteredbucket = bucket.filter(li => li.done===false)
console.log(filteredbucket);