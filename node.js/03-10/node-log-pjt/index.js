// 로그의 레벨 7
// error, warn, info, http, verbose, debug, silly
// error, warn, info, debug를 많이 씀

// error -> 에러 기록
// warn -> 에러는 아니지만 유의할 내용
// info -> 내용
// debug -> 상세한 데이터들

const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/log");
const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(express.static(__dirname + "/views"));

const fs = require("fs");


app.get("/api/logs", (req, res) => {
  logger.error("error 메시지");
  logger.warn("warn 메시지");
  logger.info("info 메시지");
  logger.http("http 메시지");
  logger.debug("debug 메시지");
  fs.readFile("./logs/2023-03-10-15.log", "utf-8", (err, data) => {
    const datalines = data.split("\r\n").slice(0,-1);
    const datajson = datalines.map((data)=>JSON.parse(data));
    return res.json(datajson);
  });
  
});

app.listen(PORT, () => console.log(`${PORT} 서버 구동중`));
