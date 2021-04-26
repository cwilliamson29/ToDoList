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






for (let i = 0; i < projectObject[key].length;) {
    const currentNote = document.getElementById('note' + i);
    const checkOffBox = document.getElementById('input' + i);
    console.log('note' + i);

    if (projectObject[key][i].checked === true) {
        currentNote.style.opacity = "50%";
        currentNote.style.background = "gray";
    } else {
        currentNote.style.opacity = "100%";
        currentNote.style.background = "rgb(202, 174, 136)";
    }
    ++i
}





const currentNote = document.getElementById('note' + (i);

        if (checkOffBox.checked === true) {

            currentNote.style.opacity = "50%";
            currentNote.style.background = "gray";

            projectObject[key][i - 1].checked = true;
            storeData('set', projectObject);

        } else if (checkOffBox.checked === false) {

            currentNote.style.opacity = "100%";
            currentNote.style.background = "rgb(202, 174, 136)"

            projectObject[key][i - 1].checked = false;
            storeData('set', projectObject);

        }