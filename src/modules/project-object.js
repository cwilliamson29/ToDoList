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

export default projectTitles;



/*

const language = {
  currentProject: null,
  set projectName(name) {
    this[name] = [];
  },
  set changeCurrentProject(name) {
      this.currentProject = name;
  },
  set pushIntoProject(value) {
      this[this.currentProject].push(value);
  }
};

language.projectName = 'first';
language.changeCurrentProject = 'first';
language.first = {hello: 'world'};
language.pushIntoProject = {helloAnother: 'world'};
console.log(language.first); // [{ hello: "world" }, { helloAnother: "world" }]


*/