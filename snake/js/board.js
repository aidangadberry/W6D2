const Snake = require("./snake.js");

function Board(dim) {
  this.dim = dim;
  this.snake = new Snake([this.dim / 2, this.dim / 2]);
}

Board.prototype.setupBoard = function () {
  const grid = [];
  
  for (var i = 0; i < 20; i++) {
    const row = [];
    
    for (var j = 0; j < 20; j++) {
      row.push(".");
    }
    
    grid.push(row);
  }
  
  return grid;
};

Board.prototype.render = function () {
  const grid = this.setupBoard();
  
  this.snake.segments.forEach((coord) => {
    for (var i = 0; i < 20; i++) {
      for (var j = 0; j < 20; j++) {
        grid[coord[0]][coord[1]] = "s";
      }
    }
  });
  
  
};

module.exports = Board;