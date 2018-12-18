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
    alias : ALIAS
  });

  microgear.on('message',function(topic,msg) {
    document.getElementById("raw_data").innerHTML = "Data from Node MCU = " + msg;
    document.getElementById("get_topic").innerHTML = "Topic = " + topic;
    var split_msg = msg.split("/"); //String data = "/" +String(Humidity) + "/" + String(Temp);
    console.log(msg);  // for debug
    if (typeof (split_msg[0]) != 'undefined' && split_msg[0] == "") {
        light = split_msg[1];
        period = split_msg[2];
        document.getElementById("light").innerHTML = "Light = " + light;
        document.getElementById("period").innerHTML = "Time period = " + period + " minute";
    }
  });

microgear.on('connected', function() {
    microgear.setAlias(ALIAS);
    document.getElementById("connected_NETPIE").innerHTML = "Connected to NETPIE"
  });

  microgear.on('present', function(event) {
    console.log(event);
  });

  microgear.on('absent', function(event) {
    console.log(event);
  });

  microgear.resettoken(function(err) {
    microgear.connect(APPID);
  });