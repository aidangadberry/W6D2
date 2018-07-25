const MoveError = require("./moveError.js");

class View {
  constructor(game, $el) {
    this.game = game;
    $el.append(this.setupBoard());
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", (e) => {
      this.makeMove($(e.currentTarget));
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    try {
      const curr_player = this.game.currentPlayer;
      this.game.playMove(pos);
      $square.addClass("occupied");
      $square.append($(`<p>${curr_player}</p>`));
      if (this.game.isOver()) {
        alert(`${curr_player} wins!`);
      }
    } catch (error) {
      if (error instanceof MoveError) {
        alert(error.msg);
      } else {
        throw error;
      }
    }
  }

  setupBoard() {
    const grid = $("<ul></ul>");
    
    for (var i = 0; i < 9; i++) {
      const cell = $("<li></li>");
      cell.data("pos", [Math.floor(i/3), i % 3]);
      grid.append(cell);
    }
    
    return grid;
  }
}

module.exports = View;
