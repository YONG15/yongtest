//비동기 통신을 동기처럼 하는법
//1.콜백 안에 콜백
//2.promise
//3.async/await <----

// 데이터 요청 -> 
// 하나의 한가지 차례대로 실행

// A (1초)
// B (10초)

// C (10000초)

// D(10초 )

// 비동기통신 

// 일의 효율 상승 
// 그때부터 시점 파악 X 

// 어 그러면 이제 
// 나는 A에게 데이터를 요청해서 받은데이터를 기반으로
 
// B에게 데이터를 요청하고싶어!!
// 근데 시점파악이 안되네?? 우째???

// 동기가 아닌 비동기기 때문에 
// 해당 비동기 상에서 동기처럼 시점파악을
// 하고싶어서 나온게 

// 1차 콜백함수 

// 콜백함수 안에 콜백함수으로 해결!!!


// 프라미스의 탄생 
// (Callback hell을 해결하기위해)

// new Promise() -> pending 상태

// new Promise((resolve, reject) => {
// }) 

// promise에서 resolve를 호출하면 ->fullfiled 이행상태
// then 으로 조회 가능

// reject를 조회하면 catch에서 조회 가능 ->rejected 상태 


// axios.get("API 주소")

// ->요청이 성공하면 얘네도 resolve를실행
// 요청이 거부되면 rejected를 실행한다 

// //프라미스로 리턴되는 모든것들은 

// axios.get("주소").then(data=>{
// console.log(data)}).catch(error=>{
// console.log(error}
// )

// 프라미스에서도 생기는 문제 
// A에서 주소를 받아서
// B에다 전달하고 B에서 받은주소를
// C에다 전달

// 주소 A

// 주소 B

// 주소 C 

// Promise 2015 (es6 자바스크립트 혁신) 
// //비동기요청(프라미스 리턴)
// axios.get("A").then(data=>{
//  axios.get("B", data).then(d => {
//    axios.get("C", d);
// })
// })

// async/await (es8 )

// 조건 Promise로 리턴되는것들에 한해서만 가능 O 

// 앞에 async함수를 붙여줘야 await 사용이 가능하다. 

// async function getDatas(){
//     //A 요청 데이터
//     //동기처럼 동작 
//     const aData = await axios.get("A");
//     //aData.then(data=> {}).catch(error => {})

//    //B에요청을 하는데 A의 데이터를 보낼수있다.
//     const bData = await axios.get("B", aData);
//    //C에 요청을하는데 B의 데이터를 보낼수있다.
//    const cData = await axios.get("C", bData)
// }