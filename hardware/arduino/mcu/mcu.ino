#include <MicroGear.h>
#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>

SoftwareSerial stm32Serial(13,15); //D7-RX,D8-TX


const char* ssid     = "My ASUS";
const char* password = "e5d29c3560d8";


//const char* ssid     = "RONUN_2.4G";
//const char* password = "0982633969";

#define APPID   "RestYourLight"
#define KEY     "1AnUQ3YWhcH29oI"
#define SECRET  "3dle3NnqxDihXlTURIM3MCZDg"

#define ALIAS   "NodeMCU1"
#define TargetWeb "HTML_web"

WiFiClient client;
MicroGear microgear(client);

void onMsghandler(char *topic, uint8_t* msg, unsigned int msglen) 
{
    Serial.print("Incoming message --> ");
    Serial.print(topic);
    Serial.print(" : ");
    char strState[msglen];
  for (int i = 0; i < msglen; i++) 
  {
    strState[i] = (char)msg[i];
    Serial.print((char)msg[i]);
  }    
  Serial.println();
  
  String stateStr = String(strState).substring(0, msglen);
  stm32Serial.print(stateStr);
    
  for (int i = 0; i < 10; i++) {
    delay(50);
    Serial.print(i);
    Serial.print("..");
  }    
  Serial.println();
  Serial.println("Sent done");
}


void onConnected(char *attribute, uint8_t* msg, unsigned int msglen) 
{
    Serial.println("Connected to NETPIE...");
    microgear.setAlias(ALIAS);
}

void onFoundgear(char *attribute, uint8_t* msg, unsigned int msglen) {
      
}

void onLostgear(char *attribute, uint8_t* msg, unsigned int msglen) {
    Serial.print("Lost member --> ");
    for (int i=0; i<msglen; i++)
        Serial.print((char)msg[i]);
    Serial.println();
}

void setup() {
  // put your setup code here, to run once:
  microgear.on(MESSAGE,onMsghandler);
  microgear.on(CONNECTED,onConnected);
  microgear.on(PRESENT,onFoundgear);
  microgear.on(ABSENT,onLostgear);
    
  Serial.begin(115200);
  Serial.println("Starting...");
  stm32Serial.begin(115200);
  WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) 
    {
       delay(250);
       Serial.print(".");
    }

    Serial.println("WiFi connected");  
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

    microgear.init(KEY,SECRET,ALIAS);
    microgear.connect(APPID);
}

void loop() {
  // put your main code here, to run repeatedly:
  //Serial.println("MCU running");
  if (microgear.connected())
    {
       microgear.loop();
       //Serial.println("connected");

       if(stm32Serial.available()){
        //Serial.println("stm available");
        String tmp = "";
        int e=0;
        while (stm32Serial.available() > 0) {
          char c = stm32Serial.read();
          if (c == '\n') break;
          if (c == 0) continue;
          if (c == '/' ) e+=1;
          tmp += c;
        }
        if (e != 5 ) return;
        if (tmp == "") return;
        
        microgear.chat(TargetWeb , tmp);
        Serial.print("Receive: ");
        Serial.println(tmp);
      }

       
    }
   else 
   {
    Serial.println("connection lost, reconnect...");
    microgear.connect(APPID);
   }
   delay(500);
  
}
