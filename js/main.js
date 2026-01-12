const lamp = document.getElementById("lamp");
const button = document.getElementById("switch");
const lampOff = "../img/white_lamp.png"
const lampOn = "../img/yellow_lamp.png"
let isLampOn = false;

// Versione 1 con isLampOn
button.addEventListener("click", function () {
  if (isLampOn) {
    lamp.src = lampOff;
    isLampOn = false;
    button.textContent = "Accendi"
  } else {
    lamp.src = lampOn;
    isLampOn = true;
    button.textContent = "Spegni"
  }
});

// Versione 2 con controllo src
// button.addEventListener("click", function () {
//   if (lamp.src.includes("white_lamp.png")) {
//     lamp.src = lampOn;
//     button.textContent = "Spegni"
//   } else {
//     lamp.src = lampOff;
//     button.textContent = "Accendi"
//   }
// });