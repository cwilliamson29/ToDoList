const addProjectBtn = document.getElementById('projectsubmit');

addProjectBtn.addEventListener('click', () => {
    value = document.getElementById('title').value;
    createProject(value);
    console.log(projectTitles)
})

const noteTitle = document.getElementById('notetitle');
const noteDesc = document.getElementById('notedesc');
const NoteDate = document.getElementById('noteDate');

const NoteSubmit = document.getElementById('notesubmit');
NoteSubmit.addEventListener('click', () => {
    let title = noteTitle.value;
    let desc = noteDesc.value;
    let date = NoteDate.value;

    addNotes(key, title, desc, date);
})