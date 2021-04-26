import storeData from "./storage.js";

function createNote(noteName, desc, dueDate, checked) {
    return { noteName, desc, dueDate, checked }
}

function addNotes(title, name, desc, date) {
    let projectObject = storeData('get');

    projectObject[title].push(createNote(name, desc, date, false));

    storeData('set', projectObject);
}

export default addNotes