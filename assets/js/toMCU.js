const APPID = "RestYourLight";
const KEY = "OS3AeqaWOi2g0l6";
const SECRET = "MLq8MFLlbbCGLaG4ICRyfemON";

const ALIAS = "HTML_web";         //  ชื่อตัวเอง
const thing1 = "NodeMCU1";          //  ชื่อเพื่อนที่จะคุย

var microgear = Microgear.create({
    key: KEY,
    secret: SECRET,
    alias: ALIAS
});
var microgear = Microgear.create({
    key: KEY,
    secret: SECRET,
    alias: ALIAS
});

microgear.on('message', function (topic, msg) {
    document.getElementById("raw_data").innerHTML = "Data from Node MCU = " + msg;
    document.getElementById("get_topic").innerHTML = "Topic = " + topic;
    var split_msg = msg.split("/"); //String data = "/" +String(Humidity) + "/" + String(Temp);
    console.log(split_msg);  // for debug
    if (typeof (split_msg[0]) != 'undefined' && split_msg[0] == "") {
        adc = split_msg[1];
        light = split_msg[2];
        period = Math.round(split_msg[3] / 10 / 60) / 100;
        document.getElementById("adc").innerHTML = "ADC = " + adc;
        document.getElementById("light").innerHTML = "Light = " + light + " %";
        document.getElementById("period").innerHTML = "ON period = " + period + " minute";
    }
});

microgear.on('connected', function () {
    microgear.setAlias(ALIAS);
    document.getElementById("connected_NETPIE").innerHTML = "Status: Connected to NETPIE"
});

microgear.on('present', function (event) {
    //console.log(event);
});

microgear.on('absent', function (event) {
    console.log(event);
});

microgear.resettoken(function (err) {
    microgear.connect(APPID);
});