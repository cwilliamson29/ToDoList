import projectTitles from './modules/project-object.js';
import ProjTitleDisplay from './modules/page-load.js';
import addNotes from './modules/create-note.js';
import storeData from './modules/storage.js';
import fieldValid from './modules/field-valid.js';



initi(projectTitles);

function removeAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function initi() {
    storeData();

    ProjTitleDisplay(projectTitles);
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

    addBtn.addEventListener('click', () => {
        projectsDiv.style.display = "none";
        noteList.style.display = "none";
        addNoteCont.style.display = "block";
        fieldValid("clear");
    });
    // add to note back button
    addBackBtn.addEventListener('click', () => {
        projectsDiv.style.display = "none";
        noteList.style.display = "block";
        addNoteCont.style.display = "none";
        fieldValid("clear");
    });

    const noteSubmit = document.getElementById('noteSubmit');

    noteSubmit.addEventListener('click', () => {

        console.log(fieldValid("note"));

        if (fieldValid("note") === true) {
            return
        } else if (fieldValid("note") === false) {
            let key = document.getElementById('selectedProjName').innerText;

            console.log("adding to notes object:   " + key);
            const addNoteTitle = document.getElementById('addNotetitle').value;
            const addNotedesc = document.getElementById('addNotedesc').value;
            const addNoteDate = document.getElementById('addNoteDate').value;

            addNotes(key, addNoteTitle, addNotedesc, addNoteDate);
        } else {
            console.log("evenlistener bypass")
        }
    })

}