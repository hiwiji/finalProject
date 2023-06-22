// const addBtn = document.querySelector(".add-note"); 

// addBtn.addEventListener("click", () => {

//     const memobox = document.createElement("div");

//     memobox.innerHTML = `
//     <div class="icon" onclick="tDeleteMemo()">
//         <i class="fa-solid fa-trash removeBtn"></i>
//     </div>
//     <textarea class="memoContent" placeholder="메모를 입력하세요..."></textarea>
//     <div class="modify">
//         <div class="modifyInfo">
//           <div class="moUser">최근수정자 : 위지은</div>
//           <div class="moDate">최근수정일 : 2023-06-17 01:52</div>
//         </div>
//         <div class="profile">
//           <img src="/resources/images/landing/오둥1.jpeg">
//         </div>
//     </div>
//     `;

//     document.querySelector(".allMemo").appendChild(memobox);

//     //memobox 개수 확인
//     const memoElements = document.qerrySelectorAll(".memoDetail");

// });

// const notesContainer = document.querySelector(".container");



// function addNote() {
//     const notes = getNotes();
    
//     if (notes.length >= 2) {
//       addNoteButton.style.display = "none"; // Hide add-note button
//       return; // Do not add more notes if limit reached
//     }
  
//     const noteObject = {
//       id: Math.floor(Math.random() * 2),
//       content: ""
//     };
  
//     const noteElement = createNoteElement(noteObject.id, noteObject.content);
//     notesContainer.insertBefore(noteElement, addNoteButton);
  
//     notes.push(noteObject);
//     saveNotes(notes);
    
//     updateAddNoteButtonVisibility(); // Check visibility after adding a note
//   }

const tAddBtn = document.querySelector(".t-add-btn");

tAddBtn.addEventListener("click", () => {
    const tMemobox = document.createElement("div");
    tMemobox.className = "tMemoDetail";

    tMemobox.innerHTML = `
    <div class="icon" onclick="tDeleteMemo()">
        <i class="fa-solid fa-trash removeBtn"></i>
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

    // 생성한 div를 원하는 곳에 추가하는 코드
    document.querySelector(".team").appendChild(tMemobox);

    // memoContent의 개수 확인
    const memoElements = document.querySelectorAll(".tMemoDetail");

    // memoContent의 개수에 따라 tPlusBtn의 표시 여부 결정
    if (memoElements.length <= 1) {
        tAddBtn.style.display = "block";
    } else {
        tAddBtn.style.display = "none";
    }
});




// 팀메모 삭제
function tDeleteMemo() {
    const removeBtn = document.querySelector(".tMemoDetail");

    removeBtn.remove();
}

