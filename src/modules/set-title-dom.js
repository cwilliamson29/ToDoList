import deleteProj from './delete.js';

function setTitleDom(title) {
    const projLists = document.getElementById('projectList');

    let listItems = document.createElement('li');
    let listLabel = document.createElement('aside')

    listItems.setAttribute('id', title);
    listLabel.innerText = title;
    listLabel.addEventListener('click', () => {
            const noteList = document.getElementById('noteList');
            const projectsList = document.getElementById('projects');
            projects.style.display = "none";
            noteList.style.display = "block";

            const selectedProjName = document.getElementById('selectedProjName');
            selectedProjName.innerText = title;

            loadNotes(title);
        })
        //console.log(keys[i])
    let delBox = document.createElement('div');
    delBox.addEventListener('click', () => { deleteProj(title) })

    let delImg = document.createElement('img');
    delImg.setAttribute('src', 'img/trashcan.webp');

    projLists.appendChild(listItems)
    listItems.appendChild(listLabel);
    listItems.appendChild(delBox)
    delBox.appendChild(delImg)
}

export default setTitleDom