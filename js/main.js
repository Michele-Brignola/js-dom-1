const lamp = document.getElementById("lamp");
const button = document.getElementById("switch");
let isLampOn = false;

button.addEventListener("click", function () {
  if (isLampOn) {
    lamp.src = "../img/white_lamp.png";
    isLampOn = false;
    button.innerHTML = "Accendi"
  } else {
    lamp.src = "../img/yellow_lamp.png";
    isLampOn = true;
    button.innerHTML = "Spegni"
  }
});
