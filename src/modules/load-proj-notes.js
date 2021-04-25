let projectTitles = JSON.parse(localStorage.getItem("projectTitles"));

function loadNotes(key, object) {

    console.log(projectTitles)

    const noteContents = document.getElementById('noteContents');
    const selectedProjName = document.getElementById('selectedProjName');

    //console.log(object + " - " + key)

    selectedProjName.innerText = key;

    for (let i = 0; i < object.length;) {

        const eachNote = document.createElement('div');
        eachNote.setAttribute('class', 'eachNote');

        const checkOff = document.createElement('div');
        checkOff.setAttribute('class', 'checkOff');

        //console.log(projectTitles[key][i].checked)
        const checkOffBox = document.createElement('input');
        checkOffBox.setAttribute('type', 'checkbox');
        /*
                console.log(projectTitles[key][i].checked)

                if (projectTitles[key][i].checked === true) {
                    checkOffBox.checked = true;
                } else {
                    checkOffBox.checked = false;
                }

                console.log(projectTitles[key][i].checked)
        */
        checkOffBox.addEventListener('change', () => {
            if (checkOffBox.checked === true) {
                projectTitles[key][i].checked = false;
            } else {
                projectTitles[key][i].checked = true;
            }

            console.log(checkOffBox.checked);
        })

        const noteTitle = document.createElement('div');
        noteTitle.setAttribute('class', 'noteTitle');
        noteTitle.innerText = object[i].noteName;

        const noteDate = document.createElement('div');
        noteDate.setAttribute('class', 'noteDate');
        noteDate.innerText = object[i].dueDate

        const noteDesc = document.createElement('div');
        noteDesc.setAttribute('class', 'noteDesc');
        noteDesc.innerText = object[i].desc

        noteContents.appendChild(eachNote);
        eachNote.appendChild(checkOff);
        checkOff.appendChild(checkOffBox)
        eachNote.appendChild(noteTitle);
        eachNote.appendChild(noteDate);
        eachNote.appendChild(noteDesc);
        ++i;
    }
    localStorage.setItem("projectTitles", JSON.stringify(projectTitles));
}

export default loadNotes