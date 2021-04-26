import storeData from "./storage.js";
import addNotes from './create-note.js';

let key1

function loadNotes(key) {
    let projectObject = storeData('get');
    key1 = key;

    const noteContents = document.getElementById('noteContents');
    const selectedProjName = document.getElementById('selectedProjName');


    selectedProjName.innerText = key;

    for (let i = 0; i < projectObject[key].length;) {

        const eachNote = document.createElement('div');
        eachNote.setAttribute('class', 'eachNote');
        eachNote.setAttribute('id', 'note' + i);

        const checkOff = document.createElement('div');
        checkOff.setAttribute('class', 'checkOff');

        const checkOffBox = document.createElement('input');
        checkOffBox.setAttribute('type', 'checkbox');
        checkOffBox.setAttribute('id', 'input' + i);

        //const currentNote = document.getElementById('note' + i);
        console.log('note' + i);

        if (projectObject[key][i].checked === true) {
            checkOffBox.checked = true;

        } else {
            checkOffBox.checked = false;
        }

        checkOffBox.addEventListener('change', () => {
            const currentNote = document.getElementById('note' + (i - 1));

            if (checkOffBox.checked === true) {

                currentNote.style.opacity = "50%";
                currentNote.style.background = "gray";

                projectObject[key][i - 1].checked = true;
                storeData('set', projectObject);

            } else if (checkOffBox.checked === false) {

                currentNote.style.opacity = "100%";
                currentNote.style.background = "rgb(202, 174, 136)";

                projectObject[key][i - 1].checked = false;
                storeData('set', projectObject);

            }
        })

        const noteTitle = document.createElement('div');
        noteTitle.setAttribute('class', 'noteTitle');
        noteTitle.innerText = projectObject[key][i].noteName;

        const noteDate = document.createElement('div');
        noteDate.setAttribute('class', 'noteDate');
        noteDate.innerText = projectObject[key][i].dueDate;

        const noteDesc = document.createElement('div');
        noteDesc.setAttribute('class', 'noteDesc');
        noteDesc.innerText = projectObject[key][i].desc;

        const noteSubmit = document.getElementById('noteSubmit');
        noteSubmit.addEventListener('click', () => {
            console.log("adding to notes object:   " + key);
            /*const addNoteTitle = document.getElementById('addNotetitle').value;
             const addNotedesc = document.getElementById('addNotedesc').value;
             const addNoteDate = document.getElementById('addNoteDate').value;

             addNotes(key, addNoteTitle, addNotedesc, addNoteDate);*/
            createNoteSubmit(key)
        })

        noteContents.appendChild(eachNote);
        eachNote.appendChild(checkOff);
        checkOff.appendChild(checkOffBox);
        eachNote.appendChild(noteTitle);
        eachNote.appendChild(noteDate);
        eachNote.appendChild(noteDesc);
        ++i;
    }

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
}

function createNoteSubmit(key) {
    const addNoteTitle = document.getElementById('addNotetitle').value;
    const addNotedesc = document.getElementById('addNotedesc').value;
    const addNoteDate = document.getElementById('addNoteDate').value;

    addNotes(key, addNoteTitle, addNotedesc, addNoteDate);
}

export default loadNotes