import createProject from './create-proj.js';
import loadNotes from './load-proj-notes.js';
import storeData from './storage.js';
import setTitleDom from './set-title-dom.js';
import fieldValid from './field-valid.js';

function ProjTitleDisplay() {

    let projectObject = storeData('get');

    let keys = Object.keys(projectObject);

    const projNameSubmit = document.getElementById('projNameSubmit');
    projNameSubmit.addEventListener('click', () => {
        const projNameInput = document.getElementById('projNameInput').value;

        if (fieldValid("title")) {
            return
        } else if (createProject(projNameInput)) {
            return
        } else {
            setTitleDom(projNameInput);
        }

    })

    const projLists = document.getElementById('projectList');

    for (let i = 0; i < keys.length;) {

        let listItems = document.createElement('li');
        listItems.setAttribute('id', keys[i]);
        listItems.innerText = keys[i];
        listItems.addEventListener('click', () => {
            const noteList = document.getElementById('noteList');
            const projectsList = document.getElementById('projects');
            projects.style.display = "none";
            noteList.style.display = "block";

            loadNotes(keys[i - 1]);
        })
        let delBox = document.createElement('div');
        let delImg = document.createElement('img');
        delImg.setAttribute('src', 'img/trashcan.webp');

        projLists.appendChild(listItems)
        listItems.appendChild(delBox)
        delBox.appendChild(delImg)

        ++i;
    }
}

export default ProjTitleDisplay