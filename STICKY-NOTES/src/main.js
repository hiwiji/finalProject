const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
    const noteElement = createBoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => 


// 클라이언트ㅇ 브라우저의 로컬저장소에서 기존메모 모두 검색
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}


// 메모저장 기능
function saveBotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

// 메모요소 생성
function createBoteElement(id, content) {

    element.classList.add("note");
    element.value = content;
    element.placeholder="Empty Sticky Note";

    element.addEventListener("change", () => {
        updateNote(id,element.value);
    })

    element.addEventListener("dbclick", () => {
        const doDelete = confirm("Are you sure you wish to delete this sticky note?");

        if (doDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

function addNote() {
    const existingNotes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);
}

function updateNote(id, newContent) {
    console.log("Updating Note...");
    console.log(id, newContent);
}

function deleteNote(id, element) {
    console.log("Deleting Note...");
    console.log(id, newContent);
};