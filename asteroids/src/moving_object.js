class MovingObject {
  constructor(arg) {
    this.pos = arg["pos"];
    this.vel = arg["vel"];
    this.radius = arg["radius"];
    this.color = arg["color"];
  };
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill()
};


module.exports = MovingObject