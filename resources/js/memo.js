// ====================== 팀 메모 설정 js ======================= 

const team = document.querySelector(".team");

//팀버튼 변수설정
const tAddBtn = document.querySelector(".tAddBtn");

// 팀 박스추가 버튼 클릭 시 div 박스 생성
tAddBtn.addEventListener("click", function() {
    const tMemobox = document.createElement("div");
  
    tMemobox.className = "tMemoDetail";
    tMemobox.innerHTML = `
    
    <div class="icon">
        <i class="fa-solid fa-trash tRemoveBtn" onclick="tDeleteMemo(this)"></i>
    </div>
    <textarea class="memoContent" placeholder="메모를 입력하세요..."></textarea>
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


    tMemobox.classList.add("tMemoDetail");
    team.appendChild(tMemobox);

    //삭제 버튼 요소 생성
    //const tRemoveBtn = document.createElement("button");
    //tRemoveBtn.innerHTML = `<i class="fa-solid fa-trash tRemoveBtn"></i>`;
    //tMemobox.appendChild(tRemoveBtn);

    // 삭제 버튼 클릭 시 div 박스 삭제
    // tRemoveBtn.addEventListener("click", function() {
    // tMemobox.parentNode.removeChild(tMemobox);
    // updateButtonVisibility();
    //});
  
    tUpdateButtonVisibility();

});

// 팀버튼 표시 여부 업데이트
function tUpdateButtonVisibility() {
    const boxes = team.querySelectorAll(".tMemoDetail");

    if (boxes.length === 0) {
        tAddBtn.style.display = "block";
  
    } else if (boxes.length === 1) {
        tAddBtn.style.display = "block";
        team.appendChild(tAddBtn);
    } else {
        tAddBtn.style.display = "none";
    }
}

// 팀메모 삭제버튼 요소 생성ㅇ
function tDeleteMemo(element) {
        const tMemobox = element.parentNode.parentNode;
        tMemobox.parentNode.removeChild(tMemobox);
        tUpdateButtonVisibility();
        }

// 초기 버튼 표시 여부 설정
tUpdateButtonVisibility();


// ====================== 개인 메모 설정 js ======================= 

const personal = document.querySelector(".personal");

//개인 버튼 변수설정
const pAddBtn = document.querySelector(".pAddBtn");

// 개인 박스추가 버튼 클릭 시 div 박스 생성
pAddBtn.addEventListener("click", function() {
    const pMemobox = document.createElement("div");
  
    pMemobox.className = "pMemoDetail";
    pMemobox.innerHTML = `
    
    <div class="icon">
        <i class="fa-solid fa-trash pRemoveBtn" onclick="pDeleteMemo(this)"></i>
    </div>
    <textarea class="memoContent" placeholder="메모를 입력하세요..."></textarea>
    <div class="modify">
        <div class="modifyInfo">
            <div class="moUser">최근수정자 : 누군데</div>
            <div class="moDate">최근수정일 : 2023-06-17 01:52</div>
        </div>
        <div class="profile">
            <img src="/resources/images/landing/오둥2.jpg">
        </div>
    </div> 
    `;


    pMemobox.classList.add("pMemoDetail");
    personal.appendChild(pMemobox);

    //삭제 버튼 요소 생성
    //const pRemoveBtn = document.createElement("button");
    //pRemoveBtn.innerHTML = `<i class="fa-solid fa-trash pRemoveBtn"></i>`;
    //pMemobox.appendChild(pRemoveBtn);

    // 삭제 버튼 클릭 시 div 박스 삭제
    // pRemoveBtn.addEventListener("click", function() {
    // pMemobox.parentNode.removeChild(pMemobox);
    // updateButtonVisibility();
    //});
  
    pUpdateButtonVisibility();

});

// 개인버튼 표시 여부 업데이트
function pUpdateButtonVisibility() {
    const boxes = personal.querySelectorAll(".pMemoDetail");

    if (boxes.length === 0) {
        pAddBtn.style.display = "block";
  
    } else if (boxes.length === 1) {
        pAddBtn.style.display = "block";
        personal.appendChild(pAddBtn);
    } else {
        pAddBtn.style.display = "none";
    }
}

// 개인메모 삭제버튼 요소 생성
function pDeleteMemo(element) {
        const pMemobox = element.parentNode.parentNode;
        pMemobox.parentNode.removeChild(pMemobox);
        pUpdateButtonVisibility();
        }

// 초기 버튼 표시 여부 설정
pUpdateButtonVisibility();



