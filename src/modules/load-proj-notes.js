import storeData from "./storage.js";

function loadNotes(key) {
    let projectObject = storeData('get');


    const noteContents = document.getElementById('noteContents');
    const selectedProjName = document.getElementById('selectedProjName');


    selectedProjName.innerText = key;

    for (let i = 0; i < projectObject[key].length;) {

        const eachNote = document.createElement('div');
        eachNote.setAttribute('class', 'eachNote');

        const checkOff = document.createElement('div');
        checkOff.setAttribute('class', 'checkOff');

        //console.log(projectObject[key][i].checked)
        const checkOffBox = document.createElement('input');
        checkOffBox.setAttribute('type', 'checkbox');

        //console.log(projectTitles[key][i].checked)

        if (projectObject[key][i].checked === true) {
            checkOffBox.checked = true;
        } else {
            checkOffBox.checked = false;
        }

        //console.log(projectTitles[key][i].checked)

        checkOffBox.addEventListener('change', () => {
            if (checkOffBox.checked === true) {
                projectObject[key][i - 1].checked = true;
                storeData('set', projectObject);

            } else if (checkOffBox.checked === false) {
                projectObject[key][i - 1].checked = false;
                storeData('set', projectObject)

            }

            //console.log(checkOffBox.checked);
        })

        const noteTitle = document.createElement('div');
        noteTitle.setAttribute('class', 'noteTitle');
        noteTitle.innerText = projectObject[key][i].noteName;

        const noteDate = document.createElement('div');
        noteDate.setAttribute('class', 'noteDate');
        noteDate.innerText = projectObject[key][i].dueDate

        const noteDesc = document.createElement('div');
        noteDesc.setAttribute('class', 'noteDesc');
        noteDesc.innerText = projectObject[key][i].desc

        noteContents.appendChild(eachNote);
        eachNote.appendChild(checkOff);
        checkOff.appendChild(checkOffBox)
        eachNote.appendChild(noteTitle);
        eachNote.appendChild(noteDate);
        eachNote.appendChild(noteDesc);
        ++i;
    }
}

export default loadNotes