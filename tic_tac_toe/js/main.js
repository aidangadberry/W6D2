const View = require("./ttt-view.js");
const Game = require("./game.js");

window.View = View;

$( () => {
  const game = new Game();
  const board = $(".ttt");
  const view = new View(game, board);
});
