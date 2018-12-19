$(document).ready(function () {
    updateClock();
    setTimeout(function () {
        console.log("ready");
        for (i = 0; i < 2000; i++);
        updateCheckBox();
        for (i = 0; i < 2000; i++); console.log("on/off ready");
        updateModeCheckBox();
        for (i = 0; i < 2000; i++); console.log("mode ready");
        updateAutoCheckBox();
        for (i = 0; i < 2000; i++); console.log("auto ready");
        updateBrightnessCheckBox();
        for (i = 0; i < 2000; i++); console.log("brightness ready");
        setTimeout(function () {
            document.getElementById("commit").innerHTML = "Done";
            $('input[type="checkbox"][name*="Mode"]')[0].removeAttribute("disabled");
            $('input[type="checkbox"][name*="on/off"]')[0].removeAttribute("disabled");
            $('input[type="checkbox"][name*="Auto"]')[0].removeAttribute("disabled");
            $('input[type="checkbox"][name*="Brightness"]')[0].removeAttribute("disabled");
        }, 5000);
    }, 1000);
});

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function updateClock() {
    var currentdate = new Date();

    var dateformat = days[currentdate.getDay()] + " " + currentdate.getDate() + " "
        + months[currentdate.getMonth()] + " "
        + currentdate.getFullYear() + " - "
        + currentdate.toLocaleTimeString();
    if (document.getElementById("datetime") != null)
        document.getElementById("datetime").innerHTML = dateformat.toLocaleString();

    sessionStorage.setItem('currentTime', currentdate.toLocaleTimeString());
    //document.getElementById("datetime").innerHTML = currentdate.toLocaleTimeString();

    setTimeout(updateClock, 1000);
}
function checkStatus(checkbox) {
    sessionStorage.setItem('switchOnFlag', checkbox.checked);
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true") {
        setTimeout(function () {
            microgear.chat(thing1, "/11");
            console.log('on');
            document.getElementById("toggleStatus").innerHTML = "Light Status : ON";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                 $('input[type="checkbox"][name*="on/off"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 1000);
    } else {
        setTimeout(function () {
            microgear.chat(thing1, "/10");
            console.log('off');
            document.getElementById("toggleStatus").innerHTML = "Light Status : OFF";
            setTimeout(function () {
                document.getElementById("commit").innerHTML = "Done";
                 $('input[type="checkbox"][name*="on/off"]')[0].removeAttribute("disabled");
            }, 5000);
        }, 1000);
    }
     $('input[type="checkbox"][name*="on/off"]')[0].setAttribute("disabled", "");
    document.getElementById("commit").innerHTML = "Submiting";
}

function updateCheckBox() {
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true") {
        microgear.chat(thing1, "/11");
        $('input[type="checkbox"][name*="on/off"]').prop('checked', true);
        document.getElementById("toggleStatus").innerHTML = "Light Status : ON";
    } else {
        microgear.chat(thing1, "/10");
        $('input[type="checkbox"][name*="on/off"]').prop('checked', false);
        document.getElementById("toggleStatus").innerHTML = "Light Status : OFF";
    }
    $('input[type="checkbox"][name*="on/off"]')[0].setAttribute("disabled", "");
    document.getElementById("commit").innerHTML = "Submiting";
}