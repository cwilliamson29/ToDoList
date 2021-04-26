function setTitleDom(title) {
    const projLists = document.getElementById('projectList');

    let listItems = document.createElement('li');
    listItems.setAttribute('id', title);
    listItems.innerText = title;
    listItems.addEventListener('click', () => {
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
    let delImg = document.createElement('img');
    delImg.setAttribute('src', 'img/trashcan.webp');

    projLists.appendChild(listItems)
    listItems.appendChild(delBox)
    delBox.appendChild(delImg)
}

export default setTitleDom