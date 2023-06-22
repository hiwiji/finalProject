// 팀메모 생성
const tPlusBtn = document.querySelector(".t-plus-btn");

tPlusBtn.addEventListener("click", () => {
  const tMemobox = document.createElement("div");
  tMemobox.className = "tMemoDetail";

  tMemobox.innerHTML = `
    <div class="icon" onclick="tDeleteMemo()">
      <i class="fa-solid fa-trash removeBtn"></i>
    </div>

    <div class="memoContent" id="content" contenteditable="true"></div>

    <div class="modify">
      <div class="modifyInfo">
        <div class="moUser">최근수정자 : 위지은</div>
        <div class="moDate">최근수정일 : 2023-06-17 01:52</div>
      </div>
      <div class="profile">
        <img src="/resources/images/landing/오둥1.jpeg">
      </div>
    </div>
  `;

    // 생성한 div를 원하는 곳에 추가하는 코드
    document.querySelector(".teamMemo").appendChild(tMemobox);

    // memoContent의 개수 확인
    const memoElements = document.querySelectorAll(".tMemoDetail");

    // memoContent의 개수에 따라 tPlusBtn의 표시 여부 결정
    if (memoElements.length <= 1) {
        tPlusBtn.style.display = "block";
    } else {
        tPlusBtn.style.display = "none";
    }
});



// 팀메모 삭제
function tDeleteMemo() {
    const removeBtn = document.querySelector(".tMemoDetail");

    removeBtn.remove();
}









// 개인메모 생성
const pPlusBtn = document.querySelector(".p-plus-btn");

pPlusBtn.addEventListener("click", () => {
  const pMemobox = document.createElement("div");
  pMemobox.className = "pMemoDetail";

  pMemobox.innerHTML = `
    <div class="icon" onclick="pDeleteMemo()">
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

  // 생성한 div를 원하는 곳에 추가하는 코드
  document.querySelector(".personalMemo").appendChild(pMemobox);

  // memoContent의 개수 확인
  const memoElements = document.querySelectorAll(".pMemoDetail");

  // memoContent의 개수에 따라 tPlusBtn의 표시 여부 결정
  if (memoElements.length >= 2) {
    pPlusBtn.style.display = "none";
  } else {
    pPlusBtn.style.display = "block";
  }
});



// 개인메모 삭제
function pDeleteMemo() {
    const removeBtn = document.querySelector(".pMemoDetail");

    removeBtn.remove();
}
