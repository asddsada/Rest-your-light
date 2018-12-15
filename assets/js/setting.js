var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var b3 = document.getElementById("button3");

$(document).ready(function () {
    updateCheckBox();
});

function checkModeStatus(checkbox){
    sessionStorage.setItem('switchOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (b1.innerHTML == "Low"){
        console.log('on');
        b1.innerHTML = "High";
    }else{
        console.log('off');
        b1.innerHTML = "Low";
	}
}

function updateModeCheckBox() {
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true") {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', true);
        b1.innerHTML = "Low";
    } else {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', false);
        b1.innerHTML = "High";
    }
}

function checkAutoStatus(checkbox){
    sessionStorage.setItem('switchOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true"){
        console.log('on');
		b2.innerHTML = "Light Status : ON";
    }else{
        console.log('off');
        b2.innerHTML = "Light Status : OFF";
	}
}

function updateAutoCheckBox() {
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true") {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', true);
        b2.innerHTML = "Light Status : ON";
    } else {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', false);
        b2.innerHTML = "Light Status : OFF";
    }
}

function checkBrightnessStatus(checkbox){
    sessionStorage.setItem('switchOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true"){
        console.log('on');
        b3.innerHTML = "Light Status : ON";
    }else{
        console.log('off');
        b3.innerHTML = "Light Status : OFF";
	}
}

function updateBrightnessCheckBox() {
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true") {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', true);
        b3.innerHTML = "Light Status : ON";
    } else {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', false);
        b3.innerHTML = "Light Status : OFF";
    }
}