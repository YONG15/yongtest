const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.use(express.json());


const { pool } = require("./db");
//localhost:8080/api/menus에 접속해보기
app.get("/api/menus", async (req, res) => {
  try {
    //select * form menus;
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});
app.post("/api/menus", async (req, res) => {
  console.log(req.body);
  //body 안에 menu_name, menu_description을 db에 쿼리로 날려주면 끝
  try {
    //첫번째 방식 [?]부분들은 변수로 넣을 수 있다.
    const data = await pool.query(`INSERT INTO menus (menu_name, menu_description, menu_img_link)
    VALUES (?,?,?)`, [req.body.menu_name, req.body.menu_description, req.body.menu_img_link]);
    return res.json(data);

    // //두번째 방식
    // const data = await pool.query("SELECT * FROM menus");
    // if (data[0]) {
    //   return res.json(data[0]);
    // }
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
