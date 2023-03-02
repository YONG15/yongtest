const puppeteer = require("puppeteer");

const main = async() => {
  //브라우저 만들기
  const browser = await puppeteer.launch({
    //기본값이 headless:true
    headless:false
  })

  //브라우저에 페이지 만들기
  const page = await browser.newPage();

  //페이지에서 주소로 이동하기
  await page.goto("https://news.daum.net/digital#1");
  const data = await page.evaluate(()=>{
    const lists = document.querySelectorAll(".list_newsmajor >li .link_txt");

      //querySelectorAll 유사배열 ->Array.from으로 배열화를 시킨후에 배열 메서드가 가능
    const result = Array.from(lists).map(li => li.textContent);
    return result;
  })
  console.log(data);
}

main()