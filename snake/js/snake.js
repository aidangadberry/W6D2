const Coord = require("./coord.js");

const DIRECTIONS = {
  "N": [0, -1],
  "E": [1, 0],
  "S": [0, 1],
  "W": [-1, 0]
};

function Snake(startPos) {
  this.direction = "N";
  this.segments = [startPos];
}

Snake.prototype.move = function () {
  const newHead = Coord.plus(this.segments[0], DIRECTIONS[this.direction]);
  this.segments.unshift(newHead);
  this.segments.pop();
};

Snake.prototype.turn = function (direction) {
  this.direction = direction;
};