//import projectTitles from './modules/project-object.js';

function createNote(noteName, desc, dueDate, checked) {
    return { noteName, desc, dueDate, checked }
}

function addNotes(title, name, desc, date) {

    projectTitles[title].push(createNote(name, desc, date, false));


}
//localStorage.setItem('projectTitles', JSON.stringify(projectTitles));

export default addNotes