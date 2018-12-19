function checkModeStatus(checkbox) {
    for (i = 0; i < 2000; i++);
    sessionStorage.setItem('switchModeOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    document.getElementById("commit").innerHTML = "Submiting";
    $('input[type="checkbox"][name*="Mode"]')[0].setAttribute("disabled", "");
    if (sessionStorage.getItem('switchModeOnFlag') == "true") {
        microgear.chat(thing1, "/21");
        setTimeout(function () {
            console.log('nightowl');
            document.getElementById("toggleModeStatus").innerHTML = "NightOWL";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                $('input[type="checkbox"][name*="Mode"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 2000);
    } else {
        microgear.chat(thing1, "/20");
        setTimeout(function () {
            console.log('earlybird');
            document.getElementById("toggleModeStatus").innerHTML = "EarlyBIRD";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                $('input[type="checkbox"][name*="Mode"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 2000);
    }

}
function updateModeCheckBox() {
    console.log(sessionStorage.getItem('switchModeOnFlag'));
    document.getElementById("commit").innerHTML = "Submiting";
    $('input[type="checkbox"][name*="Mode"]')[0].setAttribute("disabled", "");
    if (sessionStorage.getItem('switchModeOnFlag') == "true") {
        microgear.chat(thing1, "/21");
        $('input[type="checkbox"][name*="Mode"]').prop('checked', true);
        document.getElementById("toggleModeStatus").innerHTML = "NightOWL";
    } else {
        microgear.chat(thing1, "/20");
        $('input[type="checkbox"][name*="Mode"]').prop('checked', false);
        document.getElementById("toggleModeStatus").innerHTML = "EarlyBIRD";
    }
}
function checkAutoStatus(checkbox) {
    for (i = 0; i < 2000; i++);
    sessionStorage.setItem('switchAutoOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchAutoOnFlag'));
    document.getElementById("commit").innerHTML = "Submiting";
    $('input[type="checkbox"][name*="Auto"]')[0].setAttribute("disabled", "");
    if (sessionStorage.getItem('switchAutoOnFlag') == "true") {
        microgear.chat(thing1, "/31");
        setTimeout(function () {
            console.log('on');
            document.getElementById("toggleAutoStatus").innerHTML = "ON";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                $('input[type="checkbox"][name*="Auto"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 2000);
    } else {
        microgear.chat(thing1, "/30");
        setTimeout(function () {
            console.log('off');
            document.getElementById("toggleAutoStatus").innerHTML = "OFF";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                $('input[type="checkbox"][name*="Auto"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 2000);
    }
}
function updateAutoCheckBox() {
    try {
        console.log(sessionStorage.getItem('switchAutoOnFlag'));
        document.getElementById("commit").innerHTML = "Submiting";
        $('input[type="checkbox"][name*="Auto"]')[0].setAttribute("disabled", "");
        if (sessionStorage.getItem('switchAutoOnFlag') == "true") {
            microgear.chat(thing1, "/31");
            $('input[type="checkbox"][name*="Auto"]').prop('checked', true);
            document.getElementById("toggleAutoStatus").innerHTML = "ON";
        } else {
            microgear.chat(thing1, "/30");
            $('input[type="checkbox"][name*="Auto"]').prop('checked', false);
            document.getElementById("toggleAutoStatus").innerHTML = "OFF";
        }
    } catch (err) {
        console.log(err);
    }
}
function checkBrightnessStatus(checkbox) {
    for (i = 0; i < 2000; i++);
    sessionStorage.setItem('switchBrightnessOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchBrightnessOnFlag'));
    document.getElementById("commit").innerHTML = "Submiting";
    $('input[type="checkbox"][name*="Brightness"]')[0].setAttribute("disabled", "");
    if (sessionStorage.getItem('switchBrightnessOnFlag') == "true") {
        microgear.chat(thing1, "/41");
        setTimeout(function () {
            console.log('on');
            document.getElementById("toggleBrightnessStatus").innerHTML = "BRIGHT";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                $('input[type="checkbox"][name*="Brightness"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 2000);
    } else {
        microgear.chat(thing1, "/40");
        setTimeout(function () {
            console.log('off');
            document.getElementById("toggleBrightnessStatus").innerHTML = "DIM";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                $('input[type="checkbox"][name*="Brightness"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 2000);
    }
}
function updateBrightnessCheckBox() {
    console.log(sessionStorage.getItem('switchBrightnessOnFlag'));
    document.getElementById("commit").innerHTML = "Submiting";
    $('input[type="checkbox"][name*="Brightness"]')[0].setAttribute("disabled", "");
    if (sessionStorage.getItem('switchBrightnessOnFlag') == "true") {
        microgear.chat(thing1, "/41");
        $('input[type="checkbox"][name*="Brightness"]').prop('checked', true);
        document.getElementById("toggleBrightnessStatus").innerHTML = "BRIGHT";
    } else {
        microgear.chat(thing1, "/40");
        $('input[type="checkbox"][name*="Brightness"]').prop('checked', false);
        document.getElementById("toggleBrightnessStatus").innerHTML = "DIM";
    }
}