class Surrogate {};
Surrogate.prototype = SuperClass.prototype;
Subclass.prototype = new Surrogate();
Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function(parent) { 
  this.prototype.__proto__ = parent.prototype;
  this.prototype = new parent()
  this.prototype.constructor = this;
}

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype)
  this.prototype.constructor = this;
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);