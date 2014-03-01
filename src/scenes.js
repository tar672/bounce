Crafty.scene('Levels', function() {
  Crafty.e('2D, DOM, Text')
    .css({"color": "red"})
    .text('Choose a level. You\'re score is ' + Game.progress.score)
    .textFont({"size": "50px"})
    .attr({ x: 0, y: 0, w: params.gameWidth });

    for(var l in levels) {
      Crafty.e('2D, DOM, Text, Mouse')
        .text('Level ' + l + (Game.progress.completed[l]?" Done":" TODO"))
        .css({"color": "red", "background": "green", "cursor": "pointer"})
        .textFont({"size": "25px"})
        .attr({ x: 0, y: 60 + l*35, w: 200, h: 30, lvl:l })
        .bind("Click", function() {
          loadLevel(this.lvl);
        });
    }
});



Crafty.scene("Game", function() {

  Crafty.e("2D, Mouse")
    .attr({ w: params.gameWidth, h: params.gameHeight })
    .bind('MouseDown', function() { Game.drawingPath.drawing = true; })
    .bind("MouseMove", function(d) { drawPath(d.x, d.y); })
    .bind('MouseUp', function() { Game.drawingPath.drawing = false; });

  Crafty.e('2D, DOM, Text, Mouse')
    .text('Retry')
    .css({"color": "red", "background": "green", "cursor": "pointer"})
    .textFont({"size": "25px"})
    .attr({ x: 0, y: 0, w: 100, h: 30})
    .bind("Click", function() {
      loadLevel(Game.state.level);
    });

  Crafty.e('2D, DOM, Text, Mouse')
    .text('Back')
    .css({"color": "red", "background": "green", "cursor": "pointer"})
    .textFont({"size": "25px"})
    .attr({ x: 110, y: 0, w: 100, h: 30})
    .bind("Click", function() {
      Crafty.scene("Levels");
    });

})
