const students = [
  {
    name: "김도훈",
    age: 26,
    address: "경남 창원시",
  },
  {
    name: "김기홍",
    age: 27,
    address: "광주광역시",
  },
  {
    name: "김택우",
    age: 30,
    address: "인천광역시",
  },
];
// students.forEach(student=>{
//   console.log(student.name);
// })

//map은 새로운 배열을 만들고 싶을때 쓴다
//for문과 달리 원형배열을 손상시키지 않는다.
const names = students.map((student) => {
  return student.name;
});
console.log(names);
const namesAndIndex = students.map((student, idx) => {
  console.log(student,idx);
  return student.name;
});

//필터는 조건에 맞는 새로운 배열을 만든다. 즉 길이가 달라진다.
//조건은 return에만 쓴다.
const under30people = students.filter((student)=>{
  return student.age<30;
})
const under30names = under30people.map(student=>{
  return student.name;
})
console.log(under30names)

function sampleFunc(student){
  return student.age<30;
}
const under30people2 = students.filter(sampleFunc);

const arr = [1,2,3,4,5,6,7,8,9,10];
const g = arr.filter(data => data%2===0);
const ten = g.map(data => data*10);
console.log(ten);

const orders = [
  {
    menu:"치킨",
    price:18000,
    event:false,
    count:50,
  },
  {
    menu:"돈까스",
    price:8500,
    event:true,
    count:50,
  },
  {
    menu:"마라탕",
    price:10000,
    event:false,
    count:100,
  },
  {
    menu:"쫄면",
    price:6500,
    event:false,
    count:0,
  },
  {
    menu:"짜장면",
    price:5500,
    event:true,
    count:30,
  },
];

// const possible = orders.filter(data => data.count!=0);
// const sale = possible.map(data=>{
//   if(data.event){
//     data.saledPrice=data.price-data.price*0.1;
//   }
//   return data;
// })
const newOrderList = orders
  .filter((order) => order.count !== 0)
  .map((order) => {
    const newOrder = structuredClone(order);
    if (order.event) {
      newOrder.saledPrice = (newOrder.price * 9) / 10;
      return newOrder;
    }
    newOrder.saledPrice = newOrder.price;
    return newOrder;
  });
console.log(orderList); // 원래 배열은 손상되지 않는다.
console.log(newOrderList); // 새로운 메뉴 리스트 

const dataFromServer = [
  {
    name: "jony",
    age: 30,
  },
  {
    name: "sylvie",
    age: 30,
  },
  {
    name: "nana",
    age: 1,
  },
]
if (dataFromServer){
  console.log("있다");
}else{
  console.log("없다");
}//있다

const dataFromServer1 = []
if (dataFromServer1){
  console.log("있다");
}else{
  console.log("없다");
}//있다

if (dataFromServer1.length){
  console.log("있다");
}else{
  console.log("없다");
}//없다.

if (dataFromServer1 !== []){
  console.log("있다");
}else{
  console.log("없다");
}//있다

const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log(arr1===arr2);//false

const sampleObject ={};
if(sampleObject==={}){
  console.log("데이터 없음");
}else{
  console.log("데이터 있음");
}//데이터 있음
//배열끼리,객체끼리 비교불가!!!



const abc = {
  name: "치킨",
  typeOfMenu: "후라이드"
}
const {name, typeOfMenu} = abc;
console.log(name);
console.log(typeOfMenu);

const arr3 = [1,2];
const [one,two]=arr3;
console.log(one);

const square = {
  width: 200,
  height: 200,
};
const colorSqare = {
  ...square,
  color: "red",
};

console.log(colorSqare);

const catTypeAnimals = ["고양이", "호랑이", "사자"];
const dogTypeAnimals = ["개", "늑대", "여우"];
const animals = [...catTypeAnimals, ...dogTypeAnimals, "비버"];
console.log(animals);

const chiken = {
  type: "양념",
  drumsticks: 2,
  wing: 2,
}
const {type, ...another} = chicken;
console.log(another);

//도전
const bucketLists = [
  {id: 3, text:"여행가기", done: false},
  {id: 2, text:"치킨 먹기", done: true},
  {id: 1, text:"코딩 하기", done: false},
]
const getValues = (indecator) =>
  bucketLists.map(bucketList => bucketList[indecator])
console.log(getValues('id'));
console.log(getValues('text'));
console.log(getValues('done'));

const remove = (id) =>
  bucketLists.filter(item => item["id"]!==id);

console.log(remove(2))
const toggle = (id) =>{
  const newBucketLists = structuredClone(bucketLists);//원본배열 손상x
  const ret = newBucketLists.filter(el=>el.id===id);//ret바꾸면 new~도 바뀜
  if(ret[0].done){
    ret[0].done = false;
  }
  else{
    ret[0].done = true;
  }
  return newBucketLists;
}
  
console.log(toggle(2))