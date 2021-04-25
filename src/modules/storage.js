import projectTitles from './project-object.js';

// keys - set and get
function storeData(key, object) {
    let compare = JSON.parse(window.localStorage.getItem('projectTitles'));
    if (compare === null) {
        window.localStorage.setItem('projectTitles', JSON.stringify(projectTitles));
    }
    if (key === 'set') {
        window.localStorage.setItem('projectTitles', JSON.stringify(object));
        //console.log(object);
    } else if (key === 'get') {
        let projectObject = JSON.parse(window.localStorage.getItem('projectTitles'));
        return projectObject
    }
    //console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

export default storeData