function HanoiView(game, $el) {
  this.game = game;
  this.$el = $el;
  this.firstPile = null;
  this.setupTowers();
  this.render();
  $('ul').on("click", (e) => {
    this.clickTower($(e.currentTarget));
  });
}


HanoiView.prototype.clickTower = function($tower) {
  if (this.firstPile === null) {
    $tower.toggleClass("unselected");
    $tower.toggleClass("selected");
    this.firstPile = $tower.data("tower-num");
  } else {
    const secondPile = $tower.data("tower-num");
    
    if (!this.game.move(this.firstPile, secondPile)) {
      alert("Invalid move");
    }
    
    this.firstPile = null;
    $(".selected").toggleClass("unselected");
    $(".selected").toggleClass("selected");
    this.render();
    if (this.game.isWon()) {
      
      this.gameOver();
    }
  }
};

HanoiView.prototype.setupTowers = function () {
  for (var i = 0; i < 3; i++) {
    const tower = $("<ul>");
    tower.addClass("unselected");
    tower.data("tower-num", i);
    for (var j = 0; j < 3; j++) {
      const disc = $("<li>");
      disc.attr("id", `${i}-${2-j}`);
      tower.append(disc);
    }
    
    this.$el.append(tower);
  }
};

HanoiView.prototype.render = function() {
  $("li").each(function() {
    $(this).removeClass("disc-lg");
    $(this).removeClass("disc-md");
    $(this).removeClass("disc-sm");
  });
  
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < this.game.towers[i].length; j++) {
      const disc = $(`#${i}-${j}`);
      if (this.game.towers[i][j] === 3) {
        disc.addClass("disc-lg");
      } else if (this.game.towers[i][j] === 2) {
        disc.addClass("disc-md");
      } else {
        disc.addClass("disc-sm");
      }
    }
  }
};

HanoiView.prototype.gameOver = function() {
  alert("You win. You are awesome :^)");
  $(".disc-lg").addClass("game-over");
  $(".disc-md").addClass("game-over");
  $(".disc-sm").addClass("game-over");
  $("ul").off("click");
};

module.exports = HanoiView;