

// 메모 삭제
function deleteMemo() {
    const removeBtn = document.querySelector(".memoDetail");

    removeBtn.remove();
}



// 팀메모 생성
const tPlusBtn = document.querySelector(".t-plus-btn");

tPlusBtn.addEventListener("click", () => {
  const memobox = document.createElement("div");
  memobox.className = "memoDetail";

  memobox.innerHTML = `
    <div class="icon" onclick="deleteMemo()">
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

  // 생성한 div를 원하는 곳에 추가하는 코드 (예시로 body에 추가)
  document.querySelector(".teamMemo").appendChild(memobox);

  // memoContent의 개수 확인
  const memoElements = document.querySelectorAll(".memoDetail");

  // memoContent의 개수에 따라 tPlusBtn의 표시 여부 결정
  if (memoElements.length >= 2) {
    tPlusBtn.style.display = "none";
  } else {
    tPlusBtn.style.display = "block";
  }
});


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
  if (memoElements.length >= 2) {
    pPlusBtn.style.display = "none";
  } else {
    pPlusBtn.style.display = "block";
  }
});