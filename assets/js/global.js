var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function updateClock() {
    var currentdate = new Date();
   
    var dateformat = days[currentdate.getDay()] + " " + currentdate.getDate() + " "
                + months[currentdate.getMonth()]  + " " 
                + currentdate.getFullYear() + " - "
				+ currentdate.toLocaleTimeString();	
	document.getElementById("datetime").innerHTML = dateformat.toLocaleString();
	//document.getElementById("datetime").innerHTML = currentdate.toLocaleTimeString();
    
	setTimeout(updateClock, 1000);
}

if(sessionStorage.getItem("switchOnFlag") == null) {
      sessionStorage.setItem("switchOnFlag", false);
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