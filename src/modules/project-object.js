let projectTitles = {
    'My Project One': [{
        checked: false,
        desc: "My Description about this note is null",
        dueDate: "06/26/2021",
        noteName: "My Note 1 from P1"
    }, {
        checked: false,
        desc: "My Description about this note is null",
        dueDate: "06/26/2021",
        noteName: "My Note 2 from P1"
    }, {
        checked: false,
        desc: "My Description about this note is null",
        dueDate: "06/26/2021",
        noteName: "My Note 3 from P1"
    }],
    'My Project Two': [{
        checked: false,
        desc: "My Description about this note is null",
        dueDate: "06/26/2021",
        noteName: "My Note 1 from P2"
    }],
    'My Project Three': [{
        checked: false,
        desc: "My Description about this note is null",
        dueDate: "06/26/2021",
        noteName: "My Note 1 from P3"
    }]
};

localStorage.setItem("projectTitles1", JSON.stringify(projectTitles));

export default projectTitles;