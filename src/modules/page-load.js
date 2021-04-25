//import projectTitles from './modules/project-object.js';

import loadNotes from "./load-proj-notes";

function ProjTitleDisplay(projectTitles) {
    let keys = Object.keys(projectTitles);

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

            //console.log("onclick event: " + keys[i])
            //console.log("onclick event: " + projectTitles[keys[i]]);
            loadNotes(keys[i - 1], projectTitles[keys[i - 1]]);
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