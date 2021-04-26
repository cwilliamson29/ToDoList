import createProject from './create-proj.js';
import loadNotes from './load-proj-notes.js';
import storeData from './storage.js';
import setTitleDom from './set-title-dom.js';
import fieldValid from './field-valid.js';
import addNotes from './create-note.js';
import deleteProj from './delete.js';

function removeAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

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
        let listLabel = document.createElement('aside')
        listItems.setAttribute('id', keys[i]);
        listLabel.innerText = keys[i];
        listLabel.addEventListener('click', () => {
            const noteList = document.getElementById('noteList');
            const projectsList = document.getElementById('projects');
            projects.style.display = "none";
            noteList.style.display = "block";

            loadNotes(keys[i - 1]);
        })
        let delBox = document.createElement('div');

        delBox.addEventListener('click', () => { deleteProj(keys[i - 1]) })

        let delImg = document.createElement('img');
        delImg.setAttribute('src', 'img/trashcan.webp');

        projLists.appendChild(listItems);
        listItems.appendChild(listLabel);
        listItems.appendChild(delBox);
        delBox.appendChild(delImg);

        ++i;
    }

    const noteSubmit = document.getElementById('noteSubmit');

    noteSubmit.addEventListener('click', () => {

        //console.log(fieldValid("note"));

        if (fieldValid("note") === true) {
            return
        } else if (fieldValid("note") === false) {
            let key = document.getElementById('selectedProjName').innerText;

            //console.log("adding to notes object:   " + key);
            const addNoteTitle = document.getElementById('addNotetitle').value;
            const addNotedesc = document.getElementById('addNotedesc').value;
            const addNoteDate = document.getElementById('addNoteDate').value;

            addNotes(key, addNoteTitle, addNotedesc, addNoteDate);
        } else {
            console.log("evenlistener bypass")
        }
    })

    const backBtn = document.getElementById('backBtn');
    const addBackBtn = document.getElementById('addBackBtn');
    const noteContents = document.getElementById('noteContents');
    const addBtn = document.getElementById('addBtn');

    // main add to note to be hidden
    const addNoteCont = document.getElementById('addNoteCont');

    //main notelist o be hidden
    const noteList = document.getElementById('noteList');

    //main project list to be hidden
    const projectsDiv = document.getElementById('projects');

    //note list back button
    backBtn.addEventListener('click', () => {
        projectsDiv.style.display = "block";
        noteList.style.display = "none";
        addNoteCont.style.display = "none"
        removeAll(noteContents);
        fieldValid("clear");
    });
    //onst key1 = document.getElementById('selectedProjName').innerText;

    addBtn.addEventListener('click', () => {
        //key = document.getElementById('selectedProjName').value;

        projectsDiv.style.display = "none";
        noteList.style.display = "none";
        addNoteCont.style.display = "block";
        fieldValid("clear");
    });
    // add to note back button
    addBackBtn.addEventListener('click', () => {
        const key1 = document.getElementById('selectedProjName').innerText;

        projectsDiv.style.display = "none";
        noteList.style.display = "block";
        addNoteCont.style.display = "none";
        removeAll(noteContents);
        loadNotes(key1)
        fieldValid("clear");
    });
}

export default ProjTitleDisplay