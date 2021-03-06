import storeData from "./storage.js";
import fieldValid from './field-valid.js'

function createProject(title) {
    let projectObject = storeData('get');

    if (title in projectObject) {
        const invalidInput = document.getElementById('projNameInput')
        invalidInput.style.boxShadow = "0 0 10px 4px red"
        return true
    } else {
        projectObject[title] = [];
        storeData('set', projectObject);
        fieldValid('clear');
    }


}

export default createProject