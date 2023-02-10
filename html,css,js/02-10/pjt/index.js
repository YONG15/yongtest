async function setRenderBackground() {

  //blob -> 이미지,사운드,비디오등 멀티미디어 데이터를 다룰때 사용
  const result = await axios.get("https://picsum.photos/1280/720", {
    responseType : "blob"
  });
  //URL.createObjectURL -->임시 URL을 만든다(페이지 내에서만 유효)
  //받아온 데이터를 임시 URL을 만들어서 그 URL에 body 를 넣는다
  const imageUrl = URL.createObjectURL(result.data)
  document.querySelector('body').style.backgroundImage = `url(${imageUrl})`;
}


//시간갱신
function setTime(){
  const timer = document.querySelector('.timer');

  setInterval(() => {
    //date 함수
    const date = new Date();
    //date.getHour
    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }, 1);
}

function getMemo(){
  //localStorage로부터 가져와서 memo에 넣어주는 작업
  const memo = document.querySelector('.memo');
  memo.textContent = localStorage.getItem('todo');
}
function setMemo() {
  const memoInput = document.querySelector('.memo-input');
  memoInput.addEventListener('keyup', function(e){
    //e.code입력시 -> 작성한 키보드 조회
    if(e.code==='Enter' && e.target.value){
      //메모를 저장
      // const memo = document.querySelector('.memo');
      // memo.textContent = e.target.value;

      // 메모가 날아가지 않도록 저장
      // 백엔드 -> DB에 저장해서 가져오는 작업
      // 브라우저에도 간단한 저장소 개념이 있다. localStorage
      //localStorage사용법
      //localStorage.setItem('키', '넣을값')
      localStorage.setItem('todo',e.target.value);
      //localStorage.getItem('키') -> 값을 가져온다.
      //getMemo로 분리
      getMemo();

      e.target.value = "";
    }
  })
}
function deleteMemo() {
  //이벤트 위임
  //똑같은 함수를 수백만개에 addEventListner 가정 -> 속도저하
  document.addEventListener('click', function(e) {
    //localStorage삭제,HTML파트삭제
    if(e.target.classlist.contains('memo')) {
      localStorage.removeItem('todo');
      e.target.textContent = "";
    }
  })
}
function allRender() {
  setRenderBackground();
  setTime();
  setMemo();
  getMemo();
  deleteMemo();
  // 5초마다 해당 콜백함수 반복
  setInterval(()=>{
    setRenderBackground();
  },5000)
}

allRender();
