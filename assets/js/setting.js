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
//if(sessionStorage.getItem("starttimeFlag") == null) {
//      sessionStorage.setItem("starttimeFlag", "00:00");
//}
//if(sessionStorage.getItem("endtimeFlag") == null) {
//      sessionStorage.setItem("endtimeFlag", "00:00");
//}
//end of init

$(document).ready(function () {
    updateCheckBox();
    updateModeCheckBox();
    updateAutoCheckBox();
    updateBrightnessCheckBox();
    //updateStartTime();
    //updateEndTime();
});

function checkModeStatus(checkbox) {
    sessionStorage.setItem('switchModeOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    if (sessionStorage.getItem('switchModeOnFlag') == "true") {
        console.log('nightowl');
        document.getElementById("toggleModeStatus").innerHTML = "NightOWL";
    } else {
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
function checkAutoStatus(checkbox) {
    sessionStorage.setItem('switchAutoOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchAutoOnFlag'));
    if (sessionStorage.getItem('switchAutoOnFlag') == "true") {
        console.log('autoOn');
        document.getElementById("toggleAutoStatus").innerHTML = "ON";
		document.getElementById("setBrightness").disabled = true;
		document.getElementById("lock").innerHTML = '<i class="fas fa-lock"></i>';
    } else {
        console.log('autoOff');
        document.getElementById("toggleAutoStatus").innerHTML = "OFF";
		document.getElementById("setBrightness").disabled = false;
		document.getElementById("lock").innerHTML = '';
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
function checkBrightnessStatus(checkbox) {
    sessionStorage.setItem('switchBrightnessOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchBrightnessOnFlag'));
    if (sessionStorage.getItem('switchBrightnessOnFlag') == "true") {
        console.log('bright');
        document.getElementById("toggleBrightnessStatus").innerHTML = "BRIGHT";
    } else {
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

/*
var startauto = $('#starttime');
startauto.clockpicker({
    placement: 'top',
    align: 'left',
    donetext: 'Done',
    afterDone: function () {
        sessionStorage.setItem('starttimeFlag', document.getElementById("starttime").value);
        console.log(sessionStorage.getItem('starttimeFlag'));
    }
});

var endauto = $('#endtime');
endauto.clockpicker({
    placement: 'top',
    align: 'left',
    donetext: 'Done',
    afterDone: function () {
        sessionStorage.setItem('endtimeFlag', document.getElementById("endtime").value);
        console.log(sessionStorage.getItem('endtimeFlag'));
    }
});

// Manual operations
$('#starttimebtn').click(function (e) {
    // Have to stop propagation here
    e.stopPropagation();
    startauto.clockpicker('show');
});
$('#endtimebtn').click(function (e) {
    // Have to stop propagation here
    e.stopPropagation();
    endauto.clockpicker('show');
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

function clearTime(){
	sessionStorage.setItem("starttimeFlag", "00:00");
	sessionStorage.setItem("endtimeFlag", "00:00");
	document.getElementById("starttime").value = sessionStorage.getItem('starttimeFlag');
	document.getElementById("endtime").value = sessionStorage.getItem('endtimeFlag');
	console.log(sessionStorage.getItem('starttimeFlag'));
	console.log(sessionStorage.getItem('endtimeFlag'));
}
*/