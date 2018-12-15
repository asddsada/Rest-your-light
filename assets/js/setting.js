$(document).ready(function () {
    updateCheckBox();
	updateModeCheckBox()
	updateAutoCheckBox()
	updateBrightnessCheckBox()
});

function checkModeStatus(checkbox){
    sessionStorage.setItem('switchModeOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    if (sessionStorage.getItem('switchModeOnFlag') == "true"){
        console.log('high');
        document.getElementById("toggleModeStatus").innerHTML = "HIGH";
    }else{
        console.log('low');
        document.getElementById("toggleModeStatus").innerHTML = "LOW";
	}
}

function updateModeCheckBox() {
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    if (sessionStorage.getItem('switchModeOnFlag') == "true") {
        $('input[type="checkbox"][name*="Mode"]').prop('checked', true);
        document.getElementById("toggleModeStatus").innerHTML = "HIGH";
    } else {
        $('input[type="checkbox"][name*="Mode"]').prop('checked', false);
        document.getElementById("toggleModeStatus").innerHTML = "LOW";
    }
}

function checkAutoStatus(checkbox){
    sessionStorage.setItem('switchAutoOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchAutoOnFlag'));
    if (sessionStorage.getItem('switchAutoOnFlag') == "true"){
        console.log('on');
        document.getElementById("toggleAutoStatus").innerHTML = "ON";
    }else{
        console.log('off');
        document.getElementById("toggleAutoStatus").innerHTML = "OFF";
	}
}

function updateAutoCheckBox() {
    console.log(sessionStorage.getItem('switchAutoOnFlag'));
    if (sessionStorage.getItem('switchAutoOnFlag') == "true") {
        $('input[type="checkbox"][name*="Auto"]').prop('checked', true);
        document.getElementById("toggleAutoStatus").innerHTML = "ON";
    } else {
        $('input[type="checkbox"][name*="Auto"]').prop('checked', false);
        document.getElementById("toggleAutoStatus").innerHTML = "OFF";
    }
}

function checkBrightnessStatus(checkbox){
    sessionStorage.setItem('switchBrightnessOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchBrightnessOnFlag'));
    if (sessionStorage.getItem('switchBrightnessOnFlag') == "true"){
        console.log('on');
        document.getElementById("toggleBrightnessStatus").innerHTML = "BRIGHT";
    }else{
        console.log('off');
        document.getElementById("toggleBrightnessStatus").innerHTML = "DIM";
	}
}

function updateBrightnessCheckBox() {
    console.log(sessionStorage.getItem('switchBrightnessOnFlag'));
    if (sessionStorage.getItem('switchBrightnessOnFlag') == "true") {
        $('input[type="checkbox"][name*="Brightness"]').prop('checked', true);
        document.getElementById("toggleBrightnessStatus").innerHTML = "BRIGHT";
    } else {
        $('input[type="checkbox"][name*="Brightness"]').prop('checked', false);
        document.getElementById("toggleBrightnessStatus").innerHTML = "DIM";
    }
}