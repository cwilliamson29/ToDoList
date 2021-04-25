import storeData from "./storage.js";

function createProject(title) {
    let projectObject = storeData('get');

    if (title in projectObject) {
        console.log("true")
    } else {
        console.log("false")
    }
    projectObject[title] = {};
    storeData('set', projectObject)
    console.log(storeData('get'))
}

export default createProject