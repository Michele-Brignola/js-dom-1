const lamp = document.getElementById("lamp");
const button = document.getElementById("switch");
const lampOff = "../img/white_lamp.png";
const lampOn = "../img/yellow_lamp.png";
const lampBroke = "../img/broken_lamp.png";
let lampState = 0;
let btnCounter = 0;

// Versione 1 con lampState
button.addEventListener("click", function () {
  if (btnCounter >= 5) {
    lamp.src = lampBroke;
    lampState = 2;
    button.textContent = "Rotto";
    btnCounter++
  }

  if (lampState === 0) {
    lamp.src = lampOn;
    lampState = 1;
    button.textContent = "Spegni";
    btnCounter++;
  } else if (lampState === 1) {
    lamp.src = lampOff;
    lampState = 0;
    button.textContent = "Accendi";
    btnCounter++;
  }
});

// Versione 2 con controllo src
// button.addEventListener("click", function () {
//   if (btnCounter > 4) {
//     lamp.src = lampBroke;
//     button.textContent = "Rotto";
//     btnCounter++
//   }

//   if (lamp.src.includes("white_lamp.png")) {
//     lamp.src = lampOn;
//     button.textContent = "Spegni"
//     btnCounter++
//   } else if (lamp.src.includes("yellow_lamp.png")) {
//     lamp.src = lampOff;
//     button.textContent = "Accendi"
//     btnCounter++
//   }
// });
