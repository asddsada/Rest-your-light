function updateModeCheckBox() {
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    makeDisabled();
    if (sessionStorage.getItem('switchModeOnFlag') == "true") {
        microgear.chat(thing1, "/21");
    } else {
        microgear.chat(thing1, "/20");
    }
}
function updateAutoCheckBox() {
    console.log(sessionStorage.getItem('switchAutoOnFlag'));
    makeDisabled();
    if (sessionStorage.getItem('switchAutoOnFlag') == "true") {
        microgear.chat(thing1, "/31");
    } else {
        microgear.chat(thing1, "/30");
    }
}
function updateBrightnessCheckBox() {
    console.log(sessionStorage.getItem('switchBrightnessOnFlag'));
    makeDisabled();
    if (sessionStorage.getItem('switchBrightnessOnFlag') == "true") {
        microgear.chat(thing1, "/41");
    } else {
        microgear.chat(thing1, "/40");
    }
}