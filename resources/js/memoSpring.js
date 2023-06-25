// ====================== 팀 메모 설정 js ======================= 

// .team에 team 이름의 변수 할당
const team = document.querySelector(".team");

// .wAddBtn에 wAddBtn 이름의 변수 할당
const wAddBtn = document.querySelector(".wAddBtn");

// wAddBtn버튼 클릭시 이벤트 추가

wAddBtn.addEventListener("click", function() {
    // div요소인 tMemobox 생성하면서 tMemobox 이름의 변수 할당
    const tMemobox = document.createElement("div");
  
    // tMemobox 변수는 html상  .workspace 이름을 가지고 있고
    // innerHTML을 통해 workspace 안에 있던 코드를 그대로 가지고 온다
    // createElement로 하나하나 요소주기 귀찮아서 -_-
    tMemobox.className = "workspace";
    tMemobox.innerHTML = `
        <div class="icon">
            <i class="fa-solid fa-trash wRemoveBtn" onclick="tDeleteMemo(this)"></i>
        </div>
        <textarea class="memoContent" placeholder="메모를 입력하세요..." maxlength="150"></textarea>
        <p><span id="counter"> 0 </span> / 150</p>
        <div class="memoInfo">
            <div class="modifyInfo">
                <div class="memberName">최근수정자 : 위지은</div>
                <div class="memoUpdateDate">최근수정일 : 2023-06-17 01:52</div>
            </div>
            <div class="profile-image">
                <img src="/resources/images/landing/오둥1.jpeg">
            </div>
        </div> 
        `;


    tMemobox.classList.add("workspace");
    team.appendChild(tMemobox);

    //삭제 버튼 요소 생성
    //const wRemoveBtn = document.createElement("button");
    //wRemoveBtn.innerHTML = `<i class="fa-solid fa-trash wRemoveBtn"></i>`;
    //tMemobox.appendChild(wRemoveBtn);

    // 삭제 버튼 클릭 시 div 박스 삭제
    // wRemoveBtn.addEventListener("click", function() {
    // tMemobox.parentNode.removeChild(tMemobox);
    // updateButtonVisibility();
    //});

  
    // 팀메모 textarea 글자 수 제한 설정
    const textarea = tMemobox.querySelector(".memoContent");
    
    textarea.addEventListener("input", function() {
        const maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const counter = tMemobox.querySelector("#counter");
        
        // textConten 안에 모든 값 다 가져옴.
        counter.textContent = currentLength;
 
        if (currentLength > maxLength) {
            //substring(int startIndex, int endIndex) : 문자열 자르기 (0부터 maxLength까지)
            textarea.value = textarea.value.substring(0, maxLength);
            counter.textContent = maxLength;
        }
 
        // 글자 수에 따른 텍스트 색상 조정
        if (currentLength <= maxLength - 1) {
            counter.style.color = "grey";
        } else {
            counter.style.color = "red";
            const str = textarea.value;
            textarea.value = str.substr(0, maxLength);
        }
    });
  
    // 초기 버튼 표시 여부 설정
    tUpdateButtonVisibility();

});

// 팀버튼 표시 여부 업데이트
function tUpdateButtonVisibility() {
    const boxes = team.querySelectorAll(".workspace");

    if (boxes.length === 0) {
        wAddBtn.style.display = "block";
  
    } else if (boxes.length === 1) {
        wAddBtn.style.display = "block";
        team.appendChild(wAddBtn);
    } else {
        wAddBtn.style.display = "none";
    }
}

// 팀메모 삭제버튼 요소 생성
function tDeleteMemo(element) {
    const tMemobox = element.parentNode.parentNode;
    tMemobox.parentNode.removeChild(tMemobox);
    tUpdateButtonVisibility();
}

// 초기 버튼 표시 여부 설정
tUpdateButtonVisibility();







// ====================== 개인 메모 설정 js ======================= 

const alone = document.querySelector(".alone");

//개인 버튼 변수설정
const pAddBtn = document.querySelector(".pAddBtn");

// 개인 박스추가 버튼 클릭 시 div 박스 생성
pAddBtn.addEventListener("click", function() {
    const pMemobox = document.createElement("div");
  
    pMemobox.className = "personal";
    pMemobox.innerHTML = `
    
    <div class="icon">
        <i class="fa-solid fa-trash pRemoveBtn" onclick="pDeleteMemo(this)"></i>
    </div>
    <textarea class="memoContent" placeholder="메모를 입력하세요..." maxlength="150"></textarea>
    <p><span id="counter"> 0 </span> / 150</p>
    <div class="memoInfo">
        <div class="modifyInfo">
            <div class="memberName">최근수정자 : 누군데</div>
            <div class="memoUpdateDate">최근수정일 : 2023-06-17 01:52</div>
        </div>
        <div class="profile-image">
            <img src="/resources/images/landing/오둥2.jpg">
        </div>
    </div> 
    `;


    pMemobox.classList.add("personal");
    alone.appendChild(pMemobox);


    // 개인메모 textarea 글자 수 제한 설정
    const textarea = pMemobox.querySelector(".memoContent");
    
    textarea.addEventListener("input", function() {
        const maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const counter = pMemobox.querySelector("#counter");
        
        // textConten 안에 모든 값 다 가져옴.
        counter.textContent = currentLength;
 
        if (currentLength > maxLength) {
            //substring(int startIndex, int endIndex) : 문자열 자르기 (0부터 maxLength까지)
            textarea.value = textarea.value.substring(0, maxLength);
            counter.textContent = maxLength;
        }
 
        // 글자 수에 따른 텍스트 색상 조정
        if (currentLength <= maxLength - 1) {
            counter.style.color = "grey";
        } else {
            counter.style.color = "red";
            const str = textarea.value;
            textarea.value = str.substr(0, maxLength);
        }
    });
  
    // 초기 버튼 표시 여부 설정
    pUpdateButtonVisibility();


    //삭제 버튼 요소 생성
    //const pRemoveBtn = document.createElement("button");
    //pRemoveBtn.innerHTML = `<i class="fa-solid fa-trash pRemoveBtn"></i>`;
    //pMemobox.appendChild(pRemoveBtn);

    // 삭제 버튼 클릭 시 div 박스 삭제
    // pRemoveBtn.addEventListener("click", function() {
    // pMemobox.parentNode.removeChild(pMemobox);
    // updateButtonVisibility();
    //});
  

});

// 개인버튼 표시 여부 업데이트
function pUpdateButtonVisibility() {
    const boxes = alone.querySelectorAll(".personal");

    if (boxes.length === 0) {
        pAddBtn.style.display = "block";
  
    } else if (boxes.length === 1) {
        pAddBtn.style.display = "block";
        alone.appendChild(pAddBtn);
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



// 
