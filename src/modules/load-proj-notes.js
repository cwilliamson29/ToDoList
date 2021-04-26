import storeData from "./storage.js";
import addNotes from './create-note.js';

function loadNotes(key) {
    let projectObject = storeData('get');


    const noteContents = document.getElementById('noteContents');
    const selectedProjName = document.getElementById('selectedProjName');


    selectedProjName.innerText = key;

    for (let i = 0; i < projectObject[key].length;) {

        const eachNote = document.createElement('div');
        eachNote.setAttribute('class', 'eachNote');
        eachNote.setAttribute('id', 'note' + i)

        const checkOff = document.createElement('div');
        checkOff.setAttribute('class', 'checkOff');

        const checkOffBox = document.createElement('input');
        checkOffBox.setAttribute('type', 'checkbox');
        checkOffBox.setAttribute('id', 'input' + i);

        if (projectObject[key][i].checked === true) {
            checkOffBox.checked = true;
        } else {
            checkOffBox.checked = false;
        }

        checkOffBox.addEventListener('change', () => {
            if (checkOffBox.checked === true) {
                eachNote.style.opacity = "50%";
                eachNote.style.background = "gray";

                projectObject[key][i - 1].checked = true;
                storeData('set', projectObject);

            } else if (checkOffBox.checked === false) {
                eachNote.style.opacity = "100%";
                eachNote.style.background = "rgb(202, 174, 136)"

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

        if (checkOffBox.checked === true) {

            currentNote.style.opacity = "50%";
            currentNote.style.background = "gray";

        } else if (checkOffBox.checked === false) {

            currentNote.style.opacity = "100%";
            currentNote.style.background = "rgb(202, 174, 136)"
        }
        ++i
    }
}

export default loadNotes