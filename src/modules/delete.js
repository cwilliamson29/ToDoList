import storeData from "./storage.js";

function deleteProj(key) {
    let projectObject = storeData('get');

    delete projectObject[key];

    const note = document.getElementById(key);
    note.remove();

    storeData('set', projectObject);
}
export default deleteProj;