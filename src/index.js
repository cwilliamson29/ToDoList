import projectTitles from './modules/project-object.js';
import ProjTitleDisplay from './modules/page-load.js';
import createProject from './modules/create-proj.js';
import addNotes from './modules/create-note.js';
import loadNotes from './modules/load-proj-notes.js'


initi(projectTitles);

function removeAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function initi(onject) {
    //createProject('test Proj')
    //addNotes('My project One', 'name1', 'mydescriptuion asdf asd', '06/29/2021')

    ProjTitleDisplay(projectTitles);
    const backBtn = document.getElementById('backBtn');
    const noteList = document.getElementById('noteList');
    const projectsDiv = document.getElementById('projects');
    const noteContents = document.getElementById('noteContents')

    backBtn.addEventListener('click', () => {
        noteList.style.display = "none";
        projectsDiv.style.display = "block";
        removeAll(noteContents);
    })

    localStorage.setItem("projectTitles", JSON.stringify(projectTitles));
    let projectTitles2 = JSON.parse(localStorage.getItem("projectTitles"));

    console.log(projectTitles2)
}