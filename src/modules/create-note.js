import storeData from "./storage.js";

function createNote(noteName, desc, dueDate, checked) {
    return { noteName, desc, dueDate, checked };
}

function addNotes(title, name1, desc1, date1) {
    //console.log(title)
    let projectObject = storeData('get');

    projectObject[title].push(createNote(name1, desc1, date1, false));

    storeData('set', projectObject);
}

export default addNotes