
// 메모장 안에서 엔터키 작동하는 코드
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // 엔터 키를 눌렀을 때 동작할 코드
    event.preventDefault(); // 기본 엔터 동작 방지
    document.execCommand('insertHTML', false, '<br><br>'); // 줄 바꿈 삽입
  }
}




// 개인메모 생성
const pPlusBtn = document.querySelector(".p-plus-btn");

pPlusBtn.addEventListener("click", () => {
  const memobox1 = document.createElement("div");
  memobox1.className = "memoDetail";

  memobox1.innerHTML = `
    <div class="icon" onclick="deleteMemo()">
      <i class="fa-solid fa-trash removeBtn"></i>
    </div>

    <div class="memoContent" id="content" contenteditable="true"></div>

    <div class="modify">
      <div class="modifyInfo">
        <div class="moUser">최근수정자 : 뭐라니</div>
        <div class="moDate">최근수정일 : 2023-06-17 01:52</div>
      </div>
      <div class="profile">
        <img src="/resources/images/landing/오둥1.jpeg">
      </div>
    </div>
  `;

  // 생성한 div를 원하는 곳에 추가하는 코드 (예시로 body에 추가)
  document.querySelector(".personalMemo").appendChild(memobox1);

  // memoContent의 개수 확인
  const memoElements = document.querySelectorAll(".memoDetail");

  // memoContent의 개수에 따라 tPlusBtn의 표시 여부 결정
  if (memoElements.length >= 3) {
    pPlusBtn.style.display = "none";
  } else {
    pPlusBtn.style.display = "block";
  }
});