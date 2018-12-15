#include <MicroGear.h>
#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>

SoftwareSerial stm32Serial(13,15); //D7-RX,D8-TX

const char* ssid     = "My ASUS";
const char* password = "e5d29c3560d8";

#define APPID   "RestYourLight"
#define KEY     "1AnUQ3YWhcH29oI"
#define SECRET  "3dle3NnqxDihXlTURIM3MCZDg"

#define ALIAS   "NodeMCU1"
#define TargetWeb "HTML_web"

WiFiClient client;
MicroGear microgear(client);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Starting...");
  stm32Serial.begin(115200);
  
}

void loop() {
  // put your main code here, to run repeatedly:
  String tmp = "";
  Serial.println("MCU running");
    if(stm32Serial.available()){
      delay(1);
      Serial.println("stm available");
      delay(1);
      tmp =  stm32Serial.readStringUntil('\n');
      delay(1);
      
      Serial.println(tmp);
  }
  delay(1000);
}
