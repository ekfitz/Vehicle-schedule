var vbox = ["vbox1", "vbox2", "vbox3", "vbox4", "vbox5", "vbox6", "vbox7", "vbox8", "vbox9", "vbox10", "vbox11"];

var vb1;
var vb2;
var vb3;
var vb4;
var vb5;
var vb6;
var vb7;
var vb8;
var vb9;
var vb10;
var vb11;

addHeader();
addCalendar();

var calendar = document.getElementById("calendar");
addVehicleBoxes(0);
addVehicleBoxes(1);
addVehicleBoxes(2);
addVehicleBoxes(3);
addVehicleBoxes(4);
addVehicleBoxes(5);
addVehicleBoxes(6);
addVehicleBoxes(7);
addVehicleBoxes(8);
addVehicleBoxes(9);
addVehicleBoxes(10);

var vbox1 = document.getElementById("vbox1");
var vbox2 = document.getElementById("vbox2");
var vbox3 = document.getElementById("vbox3");
var vbox4 = document.getElementById("vbox4");
var vbox5 = document.getElementById("vbox5");
var vbox6 = document.getElementById("vbox6");
var vbox7 = document.getElementById("vbox7");
var vbox8 = document.getElementById("vbox8");
var vbox9 = document.getElementById("vbox9");
var vbox10 = document.getElementById("vbox10");
var vbox11 = document.getElementById("vbox11");

vbox1.style.top = "0%";
vbox2.style.top = "9.09%";
vbox3.style.top = "18.18%";
vbox4.style.top = "27.27%";
vbox5.style.top = "36.36%";
vbox6.style.top = "45.45%";
vbox7.style.top = "54.54%";
vbox8.style.top = "63.63%";
vbox9.style.top = "72.72%";
vbox10.style.top = "81.81%";
vbox11.style.top = "90.9%";


function addHeader() {
  var he = document.createElement("div");
  he.className = "header";
  he.id = "header";
  document.body.appendChild(he);
}


function addCalendar() {
  var ca = document.createElement("div");
  ca.className = "calendar";
  ca.id = "calendar";
  document.body.appendChild(ca);
}

// x =  0 (index of vbox);
function addVehicleBoxes(x) {
  var vb = document.createElement("div");
  vb.className = "vehiclebox";
  vb.id = vbox[x];
  calendar.appendChild(vb);
}
