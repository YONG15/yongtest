const names = ["jony", "sylvie", "nana"];

//slice:원본손상x
const newNames = names.slice(1,2);
console.log(names);
console.log(newNames);

//splice:원본 손상됨
const newNames2 = names.splice(2,1);//2번 index부터 1개 삭제
console.log(names);
console.log(newNames2);


// 특정 값 지울때
// var index = array.indexOf(item);
// if (index !== -1) {
//   array.splice(index, 1);
// }