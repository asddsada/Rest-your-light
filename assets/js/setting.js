$(document).ready(function () {
    updateCheckBox();
    updateModeCheckBox();
    updateAutoCheckBox();
    updateBrightnessCheckBox();
    updateStartTime();
    updateEndTime();
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
        console.log('on');
        document.getElementById("toggleAutoStatus").innerHTML = "ON";
    } else {
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
function checkBrightnessStatus(checkbox) {
    sessionStorage.setItem('switchBrightnessOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchBrightnessOnFlag'));
    if (sessionStorage.getItem('switchBrightnessOnFlag') == "true") {
        console.log('on');
        document.getElementById("toggleBrightnessStatus").innerHTML = "BRIGHT";
    } else {
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
    document.getElementById("starttime").value = sessionStorage.getItem('starttimeFlag');
    //ตรงนี้ไม่รู้ว่าต้องใช้อะไรให้รีเฟรชหน้าแล้วยังจำข้อมูลอยู่
    //document.getElementById("starttime").value;
}
function updateEndTime() {
    console.log(sessionStorage.getItem('endtimeFlag'));
    document.getElementById("endtime").value = sessionStorage.getItem('endtimeFlag');
    //ตรงนี้ไม่รู้ว่าต้องใช้อะไรให้รีเฟรชหน้าแล้วยังจำข้อมูลอยู่
    //document.getElementById("endtime").value;
}