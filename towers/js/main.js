const HanoiView = require("./hanoi-view.js");
const Game = require("./game.js");

window.HanoiView = HanoiView;

$( () => {
  const rootEl = $('.hanoi');
  const game = new Game();
  new HanoiView(game, rootEl);
});