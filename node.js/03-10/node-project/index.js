const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const app = express();
const PORT = 8080;

app.use(morgan("dev"));

//템플릿 엔진으로 ejs를 사용
app.set("view engine", "ejs");
// 해당 ejs에서 활용할 경로를 ./views 폴더로 활용
app.set("views", "./views");

app.get("/", (req, res) => {
  //ejs에서 화면을 그리는 방식
  // index.ejs를 그린다
  res.render("index", {name:"온유"});
});

// axios로 jsonplaceholder 요청 -> 데이터를 그려보기
// 서버끄고 npm i axios 후 다시 서버 시작

app.get("/holder", async(req,res)=>{
  const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
  //위의 result.data를 활용해서 ejs파일 하나 만들고
  // ejs에서 for문을 활용해서 데이터 뿌려보기
  res.render("holder_all", {data: result.data});
})

app.get("/holder/:id", async(req,res)=>{
  const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`)

  //holder.ejs를 해석 -> 없으니까 만들기
  res.render("holder", {data: result.data});
})
app.listen(PORT, () => console.log(`${PORT} 서버 구동중`));
