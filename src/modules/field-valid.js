function fieldValid(type) {
    const projNameInput = document.getElementById('projNameInput').value;
    const addNotetitle = document.getElementById('addNotetitle').value

    if (type === "title") {

        if (projNameInput < 1) {
            const invalidInput = document.getElementById('projNameInput')
            invalidInput.style.boxShadow = "0 0 10px 4px red"
            return true;
        } else {
            return false;
        }

    } else if (type === "note") {

        let fields = ['addNotetitle', 'addNotedesc', 'addNoteDate'];

        let truthy = false;

        for (let i = 0; i < fields.length;) {
            let invalidInput = document.getElementById(fields[i]).value;
            let invalidField = document.getElementById(fields[i]);

            if (invalidInput < 1) {
                invalidField.style.boxShadow = "0 0 10px 4px red";
                truthy = true;

            } else {
                invalidField.style.boxShadow = '';
            }
            ++i;
        }
        return truthy;
    } else if (type === "clear") {

        let fields = ['addNotetitle', 'addNotedesc', 'addNoteDate', 'projNameInput'];

        for (let i = 0; i < fields.length;) {
            let invalidField = document.getElementById(fields[i]);
            invalidField.style.boxShadow = '';
            invalidField.value = '';
            ++i;
        }
    } else {
        console.log("error, wrong argument passed for fieldValid");
        return
    }
}

export default fieldValid