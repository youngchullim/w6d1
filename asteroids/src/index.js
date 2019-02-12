const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game_canvas");
  canvasEl.getContext("2d");
  canvasEl.width="1200";
  canvasEl.height="800"; 
  canvasEl.style="border:10px solid pink";
});