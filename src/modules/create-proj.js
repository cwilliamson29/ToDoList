function createProject(title) {

    if (title in projectTitles) {
        console.log("true")
    } else {
        console.log("false")
    }
    projectTitles[title] = {};
}

export default createProject