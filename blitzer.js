function main() {
  var inputSpeed = document.getElementById("speed");
  var inputdir = document.getElementById("dir");
  var inputMaxSpeed = document.getElementById("maxSpeed");

  var speed = parseInt(inputSpeed.value);
  var isFacing = inputdir.checked;
  var setMaxSpeed = parseInt(inputMaxSpeed.value);
  var setMaxSpeed_10 = setMaxSpeed * 1.10;
  console.log(setMaxSpeed_10);
  
  if (speed > setMaxSpeed_10 && isFacing == true) {
    alert("Geblitzt");
  } else {
    alert("nicht geblitzt");
  }
}
