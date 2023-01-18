const title = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong"
);
const rate = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span"
);
const Sdate = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > span.txt-info > strong"
)

const title2 = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > a > strong"
);
const rate2 = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span"
);
const Sdate2 = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong"
);
const title3 = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents > a > strong"
);
const rate3 = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents > div > strong > span"
);
const Sdate3 = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents > span.txt-info > strong"
);


console.log(title.textContent);
console.log(rate.textContent);
console.log(Sdate.textContent.trim());
// trim()공백 자르기
title2.textContent = "삼겹살과 그대라면";
rate2.textContent = "5%";
Sdate2.textContent = "1985.07.07";


let tmp = title.textContent;
title.textContent = title3.textContent;
title3.textContent = tmp;

const img1 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img");
const img3 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span > img");

let srctmp = img1.src;
img1.src = img3.src;
img3.src = srctmp;

const boxContents = document.querySelectorAll(".box-contents")
console.log(boxContents)