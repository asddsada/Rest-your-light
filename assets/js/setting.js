$(document).ready(function () {
    updateCheckBox();
	updateModeCheckBox();
	updateAutoCheckBox();
	updateBrightnessCheckBox();
	updateStartTime();
	updateEndTime();
});

//init default value of all sessionStorage
if(sessionStorage.getItem("switchModeOnFlag") == null) {
      sessionStorage.setItem("switchModeOnFlag", false);
} 
if(sessionStorage.getItem("switchAutoOnFlag") == null) {
      sessionStorage.setItem("switchAutoOnFlag", false);
}
if(sessionStorage.getItem("switchBrightnessOnFlag") == null) {
      sessionStorage.setItem("switchBrightnessOnFlag", false);
}
if(sessionStorage.getItem("starttimeFlag") == null) {
      sessionStorage.setItem("starttimeFlag", "00:00");
}
if(sessionStorage.getItem("endtimeFlag") == null) {
      sessionStorage.setItem("endtimeFlag", "00:00");
}
//end of init

function checkModeStatus(checkbox){
    sessionStorage.setItem('switchModeOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    if (sessionStorage.getItem('switchModeOnFlag') == "true"){
        console.log('nightowl');
        document.getElementById("toggleModeStatus").innerHTML = "NightOWL";
    }else{
        console.log('earlybird');
        document.getElementById("toggleModeStatus").innerHTML = "EarlyBIRD";
	}
}
function updateModeCheckBox() {
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    if (sessionStorage.getItem('switchModeOnFlag') == "true") {
        $('input[type="checkbox"][name*="Mode"]').prop('checked', true);
        document.getElementById("toggleModeStatus").innerHTML = "NightOWL";
    } else {
        $('input[type="checkbox"][name*="Mode"]').prop('checked', false);
        document.getElementById("toggleModeStatus").innerHTML = "EarlyBIRD";
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
        console.log('bright');
        document.getElementById("toggleBrightnessStatus").innerHTML = "BRIGHT";
    }else{
        console.log('dim');
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

//clockpicker part
var startauto = $('#starttime');
startauto.clockpicker({
	placement: 'top',
    align: 'left',
    donetext: 'Done'
});

var endauto = $('#endtime');
endauto.clockpicker({
	placement: 'top',
    align: 'left',
    donetext: 'Done'
});

$('#starttimebtn').click(function(e){
    // Have to stop propagation here
    e.stopPropagation();
    startauto.clockpicker('show');
	document.getElementById("isSubmit").innerHTML = "";
});
$('#endtimebtn').click(function(e){
    // Have to stop propagation here
    e.stopPropagation();
    endauto.clockpicker('show');
	document.getElementById("isSubmit").innerHTML = "";
});
function updateStartTime() {
    console.log(sessionStorage.getItem('starttimeFlag'));
	$('input[type="text"][name*="inpStart"]').prop(document.getElementById("starttime").value);
	document.getElementById("starttime").value = sessionStorage.getItem('starttimeFlag');
}
function updateEndTime() {
    console.log(sessionStorage.getItem('endtimeFlag'));
	$('input[type="text"][name*="inpEnd"]').prop(document.getElementById("endtime").value);
	document.getElementById("endtime").value = sessionStorage.getItem('endtimeFlag');
}

function submitTime(){
	sessionStorage.setItem('starttimeFlag', document.getElementById("starttime").value);
	console.log(sessionStorage.getItem('starttimeFlag'));
	sessionStorage.setItem('endtimeFlag', document.getElementById("endtime").value);
	console.log(sessionStorage.getItem('endtimeFlag'));
	document.getElementById("isSubmit").innerHTML = "Submitted";
}