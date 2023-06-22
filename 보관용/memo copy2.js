// 팀메모 생성
const teamMemoContainer = document.querySelector(".teamMemo");

function createTMemo() {
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
  teamMemoContainer.appendChild(tMemobox);

  // memoContent의 개수 확인
  const memoElements = document.querySelectorAll(".tMemoDetail");

  // memoContent의 개수에 따라 tPlusBtn의 표시 여부 결정
  if (memoElements.length <= 1) {
    tPlusBtn.style.display = "block";
  } else {
    tPlusBtn.style.display = "none";
  }
}

const tPlusBtn = document.querySelector(".t-plus-btn");

tPlusBtn.addEventListener("click", () => {
  createTMemo();
});

// 팀메모 삭제
function tDeleteMemo() {
  const removeBtn = document.querySelector(".tMemoDetail");
  
  removeBtn.remove();

  // Check the number of tDeleteMemo() elements
  const memoElements = document.querySelectorAll(".tMemoDetail");

  // 0개 또는 1개의 tDeleteMemo() 요소가 있는지 확인
  if (memoElements.length <= 1) {
    // Remove the existing tPlusBtn button
    const existingTPlusBtn = document.querySelector(".t-plus-btn");
    if (existingTPlusBtn) {
      existingTPlusBtn.remove();
    }

    // tPlusBtn 버튼 생성
    const tPlusBtn = document.createElement("a");
    tPlusBtn.className = "t-plus-btn";
    tPlusBtn.innerHTML = '<i class="fa-solid fa-circle-plus fa-2xl"></i>';

    // tPlusBtn 버튼에 이벤트 리스너 추가
    tPlusBtn.addEventListener("click", () => {
      createTMemo();
    });

    // teamMemo 컨테이너에 tPlusBtn 버튼 추가
    teamMemoContainer.appendChild(tPlusBtn);
  }
}