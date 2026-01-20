import React from "react";
export default function HardwareSoftware() {
  const arduinoCode = `
  #include <Servo.h>


Servo servoWAIST, servoSHOULDER, servoELBOW, servoWRISTPITCH, servoWRISTROLL, servoGRIPPER;


int HOME_WAIST    = 90;
int HOME_SHOULDER = 100;
int HOME_ELBOW    = 80;
int HOME_PITCH    = 170;
int HOME_ROLL     = 90;
int HOME_GRIPPER  = 120;


int posWAIST = HOME_WAIST;
int posSHOULDER = HOME_SHOULDER;
int posELBOW = HOME_ELBOW;
int posPITCH = HOME_PITCH;
int posROLL = HOME_ROLL;
int posGRIPPER = HOME_GRIPPER;


#define GRIP_OPEN  120
#define GRIP_CLOSE 150


const int s0 = 12, s1 = 13, s2 = 7, s3 = 8, out = 4;
int redVal, greenVal, blueVal;


enum Color { NONE, RED, GREEN, BLUE };


void setup() {
  Serial.begin(9600);
  Serial.println("System started");

  servoWAIST.attach(3);
  servoSHOULDER.attach(5);
  servoELBOW.attach(6);
  servoWRISTPITCH.attach(9);
  servoWRISTROLL.attach(10);
  servoGRIPPER.attach(11);

  
  servoWAIST.write(HOME_WAIST);
  servoSHOULDER.write(HOME_SHOULDER);
  servoELBOW.write(HOME_ELBOW);
  servoWRISTPITCH.write(HOME_PITCH);
  servoWRISTROLL.write(HOME_ROLL);
  servoGRIPPER.write(HOME_GRIPPER);

  
  delay(3000);

  pinMode(s0, OUTPUT);
  pinMode(s1, OUTPUT);
  digitalWrite(s0, HIGH);
  digitalWrite(s1, LOW);
  pinMode(s2, OUTPUT);
  pinMode(s3, OUTPUT);
  pinMode(out, INPUT);

  goHome();
}


void loop() {
  readColor();
  Color colorDetected = detectColor();

  switch (colorDetected) {
    case RED:
      Serial.println("\n🔴 RED detected");
      redTask();
      break;
    case GREEN:
      Serial.println("\n🟢 GREEN detected");
      greenTask();
      break;
    case BLUE:
      Serial.println("\n🔵 BLUE detected");
      blueTask();
      break;
    default:
      Serial.println("\n⚪ No color detected");
      break;
  }

  delay(2000);
}


void readColor() {
  redVal   = readColorValue(LOW, LOW);
  greenVal = readColorValue(HIGH, HIGH);
  blueVal  = readColorValue(LOW, HIGH);

  Serial.print("Color values -> R:");
  Serial.print(redVal);
  Serial.print(" G:");
  Serial.print(greenVal);
  Serial.print(" B:");
  Serial.println(blueVal);
}

int readColorValue(bool s2v, bool s3v) {
  digitalWrite(s2, s2v);
  digitalWrite(s3, s3v);
  delay(50);
  return pulseIn(out, LOW);
}


Color detectColor() {
  Color detected = NONE;

  bool redInRange   = (redVal   >= 80  && redVal   <= 180);
  bool greenInRange = (greenVal >= 120 && greenVal <= 210);
  bool blueInRange  = (blueVal  >= 70  && blueVal  <= 200);

  int minVal = 1500;

  if (redInRange && redVal < minVal) {
    minVal = redVal;
    detected = RED;
  }
  if (greenInRange && greenVal < minVal) {
    minVal = greenVal;
    detected = GREEN;
  }
  if (blueInRange && blueVal < minVal) {
    minVal = blueVal;
    detected = BLUE;
  }

  return detected;
}


void moveSmooth(Servo &s, int &cur, int tgt, const char* name) {
  if (abs(tgt - cur) < 1) return;

  Serial.print("Moving ");
  Serial.print(name);
  Serial.print(" -> ");
  Serial.println(tgt);

  int step = (tgt > cur) ? 1 : -1;
  for (int p = cur; p != tgt; p += step) {
    s.write(p);
    delay(20);
  }
  cur = tgt;

  delay(2000); // 2 seconds pause before next servo
}


void moveArm(int w, int s, int e, int p, int r, int g) {
  moveSmooth(servoWAIST, posWAIST, w, "WAIST");
  moveSmooth(servoSHOULDER, posSHOULDER, s, "SHOULDER");
  moveSmooth(servoELBOW, posELBOW, e, "ELBOW");
  moveSmooth(servoWRISTPITCH, posPITCH, p, "WRIST PITCH");
  moveSmooth(servoWRISTROLL, posROLL, r, "WRIST ROLL");
  moveSmooth(servoGRIPPER, posGRIPPER, g, "GRIPPER");
}


void goHome() {
  Serial.println("Going HOME");
  moveArm(HOME_WAIST, HOME_SHOULDER, HOME_ELBOW,
          HOME_PITCH, HOME_ROLL, HOME_GRIPPER);
}



void redTask() {
  moveArm(90, 100, 70, 160, 90, GRIP_OPEN);   // Above
  moveArm(90, 110, 70, 140, 90, GRIP_CLOSE);  // Pick
  moveArm(90, 100, 60, 160, 90, GRIP_CLOSE);  // Lift
  moveArm(45, 100, 60, 160, 90, GRIP_CLOSE);  // Rotate
  moveArm(45, 100, 70, 140, 90, GRIP_OPEN);   // Drop
  goHome();
}


void greenTask() {
  moveArm(90, 100, 70, 160, 90, GRIP_OPEN);   // Above
  moveArm(90, 110, 70, 140, 90, GRIP_CLOSE);  // Pick
  moveArm(90, 100, 60, 160, 90, GRIP_CLOSE);  // Lift
  moveArm(180, 100, 60, 160, 90, GRIP_CLOSE); // Rotate
  moveArm(180, 100, 70, 140, 90, GRIP_OPEN);  // Drop
  goHome();
}


void blueTask() {
  moveArm(90, 100, 70, 160, 90, GRIP_OPEN);   // Above
  moveArm(90, 110, 70, 140, 90, GRIP_CLOSE);  // Pick
  moveArm(90, 100, 60, 160, 90, GRIP_CLOSE);  // Lift
  moveArm(140, 100, 60, 160, 90, GRIP_CLOSE); // Rotate
  moveArm(140, 100, 70, 140, 90, GRIP_OPEN);  // Drop
  goHome();
}

  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(arduinoCode);
    alert("Code copied to clipboard!");
  };

  return (
    <>
      <div className="p-10 max-w-6xl mx-auto">
        <h1 className="text-3xl text-blue-400 mb-4 mt-10">
          Hardware & Software
        </h1>
        <div className="bg-gray-650 border border-blue-900 rounded-xl p-6">
          <p className="text-gray-550 leading-relaxed">
            Hardware: Arduino, TCS3200 Color Sensor, Servo Motors, Power Supply.
            Software: Arduino IDE, Embedded C, Website coding is React (Vite).
          </p>
        </div>

        <h2 className="text-2xl text-green-400 mb-2 mt-10">
          Arduino Code Example
        </h2>
        <div className="flex items-center space-x-3">
          <h3 className="text-2xl text-green-400 mb-2 mt-10">
            Install Arduino IDE
          </h3>
          <img src="/IDE.png" alt="" className="w-30 h-20 object-contain" />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
          <code>{arduinoCode}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="mt-3 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Copy Code
        </button>
      </div>

      {/* Project Section */}
      <section className="tmp-latest-portfolio tmp-section-gap mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl text-blue-400 font-bold mb-6 mt-5">
            Main Hardware Components
          </h2>
          <h4>To Click Photo</h4>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth">
            {/* Card 1 */}
            <div className="min-w-72 md:min-w-96 snap-center latest-portfolio-card v5 tmp-hover-link relative group overflow-hidden rounded-xl">
              <div className="img-box v2">
                <a
                  href="https://www.cestore-mm.com/product/arduino-uno-development-board/"
                  className="block"
                >
                  <img
                    className="img-primary w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/a.webp"
                    alt="Arduino UNO"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl text-blue-400 font-bold mb-2">
                      Arduino UNO
                    </h3>
                    <p className="text-gray-200 text-sm px-4">Microprocessor</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-72 md:min-w-96 snap-center latest-portfolio-card v5 tmp-hover-link relative group overflow-hidden rounded-xl">
              <div className="img-box v2">
                <a
                  href="https://www.cestore-mm.com/product/tcs230-tcs3200-color-sensor-module/"
                  className="block"
                >
                  <img
                    className="img-primary w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/TCS.JPG"
                    alt="Color Sensor"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl text-blue-400 font-bold mb-2">
                      Color Sensor
                    </h3>
                    <p className="text-gray-200 text-sm px-4">
                      TCS 3200
                      <br />
                      Input: 3.3V – 5V
                      <br />
                      Output: Frequency
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-72 md:min-w-96 snap-center latest-portfolio-card v5 tmp-hover-link relative group overflow-hidden rounded-xl">
              <div className="img-box v2">
                <a
                  href="https://www.cestore-mm.com/product/eve-18650-battery/"
                  className="block"
                >
                  <img
                    className="img-primary w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/18.jpg"
                    alt="EVE Battery"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl text-blue-400 font-bold mb-2">
                      EVE Battery
                    </h3>
                    <p className="text-gray-200 text-sm px-4">
                      18650 Lithium Battery
                      <br />
                      Output: 3.7V – 4.2V
                      <br />
                      2600mAh
                      <br />
                      High Discharge
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="min-w-72 md:min-w-96 snap-center latest-portfolio-card v5 tmp-hover-link relative group overflow-hidden rounded-xl">
              <div className="img-box v2">
                <a
                  href="https://www.cestore-mm.com/product/mg996r-metal-gear-servo-motor-180/"
                  className="block"
                >
                  <img
                    className="img-primary w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/servo.jpg"
                    alt="Servo Motor"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl text-blue-400 font-bold mb-2">
                      40kg Servo Motor
                    </h3>
                    <p className="text-gray-200 text-sm px-4">
                      Operating Voltage: 4.8V – 6.0V
                      <br />
                      Speed: 0.16s / 180°
                      <br />
                      Torque: 40kg-cm
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="min-w-72 md:min-w-96 snap-center latest-portfolio-card v5 tmp-hover-link relative group overflow-hidden rounded-xl">
              <div className="img-box v2">
                <a
                  href="https://www.cestore-mm.com/product/breadboard-jumper-wire/"
                  className="block"
                >
                  <img
                    className="img-primary w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/j.webp"
                    alt="Jumper Wires"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl text-blue-400 font-bold mb-2">
                      Jumper Wires
                    </h3>
                    <p className="text-gray-200 text-sm px-4">
                      Female–Male / Male–Male
                      <br />
                      20cm Length
                      <br />
                      40 Pieces
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
