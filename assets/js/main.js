function updateClock() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
    
    setTimeout(updateClock, 1000);
}
function checkStatus(checkbox){
    if (checkbox.checked){
		document.getElementById("toggleStatus").innerHTML = "ON";
    }else{
		document.getElementById("toggleStatus").innerHTML = "OFF";
	}
}
$(document).ready(function () {
    updateClock();
});