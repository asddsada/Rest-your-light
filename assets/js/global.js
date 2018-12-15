function updateClock() {
    var currentTime = new Date();
    document.getElementById("datetime").innerHTML = currentTime.toLocaleTimeString();
    
    setTimeout(updateClock, 1000);
}
function checkStatus(checkbox){
    sessionStorage.setItem('switchOnFlag',checkbox.checked);
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true"){
        console.log('on');
        document.getElementById("toggleStatus").innerHTML = "Light Status : ON";
    }else{
        console.log('off');
        document.getElementById("toggleStatus").innerHTML = "Light Status : OFF";
	}
}

function updateCheckBox() {
    console.log(sessionStorage.getItem('switchOnFlag'));
    if (sessionStorage.getItem('switchOnFlag') == "true") {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', true);
        document.getElementById("toggleStatus").innerHTML = "Light Status : ON";
    } else {
        $('input[type="checkbox"][name*="on/off"]').prop('checked', false);
        document.getElementById("toggleStatus").innerHTML = "Light Status : OFF";
    }
}