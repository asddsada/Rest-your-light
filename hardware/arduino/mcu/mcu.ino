#include <MicroGear.h>
#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>

SoftwareSerial stm32Serial(13,15); //D7-RX,D8-TX

/*
const char* ssid     = "My ASUS";
const char* password = "e5d29c3560d8";
*/

const char* ssid     = "RONUN_2.4G";
const char* password = "0982633969";

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
    msg[msglen] = '\0';
    Serial.println((char *)msg);
}


void onConnected(char *attribute, uint8_t* msg, unsigned int msglen) 
{
    Serial.println("Connected to NETPIE...");
    microgear.setAlias(ALIAS);
}

void setup() {
  // put your setup code here, to run once:
  microgear.on(MESSAGE,onMsghandler);
  microgear.on(CONNECTED,onConnected);
    
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
  Serial.println("MCU running");
  if (microgear.connected())
    {
       microgear.loop();
       Serial.println("connected");

       if(stm32Serial.available()){
        Serial.println("stm available");
        String tmp = "";
        while (stm32Serial.available() > 0) {
          char c = stm32Serial.read();
          if (c == '\n') break;
          if (c == 0) continue;
          tmp += c;
        }

        if (tmp == "") return;
        
        microgear.chat(TargetWeb , tmp);
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
