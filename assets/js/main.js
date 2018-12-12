function updateClock() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
    
    setTimeout(updateClock, 1000);
}

$(document).ready(function () {
    updateClock();
});