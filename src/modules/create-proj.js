let projectTitles = { 'My project One': {} };
let projectNotes = {};

let key = "Project Jackal"

function createProject(title) {

    if (title in projectTitles) {
        console.log("true")
    } else {
        console.log("false")
    }
    projectTitles[title] = {};
}

function createNote(noteName, desc, dueDate, checked) {
    return { noteName, desc, dueDate, checked }
}


function addNotes(title, name, desc, date) {
    projectTitles[title] = createNote(name, desc, date, false);

    localStorage.setItem('projectTitles', JSON.stringify(projectTitles));
}

function addNotes2(title) {
    projectTitles[title] = createNote("My Note 1", "My Description about this note is null", "06/26/1984", false);
}
let selectedNote = 'My project One'


createProject(key);
addNotes2('My project One');

let keys = Object.keys(projectTitles)


// Put the object into storage
localStorage.setItem('projectTitles', JSON.stringify(projectTitles));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('projectTitles');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

let keys2 = Object.keys(JSON.parse(retrievedObject))