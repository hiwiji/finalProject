const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

updateAddNoteButtonVisibility(); // Check visibility on page load

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  
  if (notes.length >= 2) {
    addNoteButton.style.display = "none"; // Hide add-note button
    return; // Do not add more notes if limit reached
  }

  const noteObject = {
    id: Math.floor(Math.random() * 2),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
  
  updateAddNoteButtonVisibility(); // Check visibility after adding a note
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
  
  updateAddNoteButtonVisibility(); // Check visibility after deleting a note
}

function updateAddNoteButtonVisibility() {
  const notes = getNotes();
  
  if (notes.length >= 2) {
    addNoteButton.style.display = "none"; // Hide add-note button
  } else {
    addNoteButton.style.display = "block"; // Show add-note button
  }
}

    </script>
</body>
</html>