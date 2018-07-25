const Board = require("./board.js");

function View($el) {
  this.$el = $el;
  this.board = new Board();
  $(document).on("keydown",(e) => {
    const dir = this.handleKeyEvent(e.which);
    if (dir) {
      this.board.snake.turn(dir);
    }
  });
  setInterval(() => {
    this.step();
  }, 500);
}

View.prototype.handleKeyEvent = function(keyCode) {
  switch (keyCode) {
    case 37:
      return("W");
    case 38:
      return("N");
    case 39:
      return("E");
    case 40:
      return("S");
    default:
      return false;
  }
};

View.prototype.step = function () {
  this.board.snake.move();
  this.board.render();
};