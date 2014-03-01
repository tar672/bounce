Crafty.scene('Levels', function() {
  Crafty.e('2D, DOM, Text')
    .text('Choose a level')
    .attr({ x: 0, y: params.gameHeight/2 - 24, w: params.gameWidth });

    for(l in levels) {
      Crafty.e('2D, DOM, Text, Mouse')
        .text('Level ' + l)
        .attr({ x: 0, y: params.gameHeight/2 + l*24, w: params.gameWidth, h: 24 })
        .bind("Click", function() {
          Crafty.scene("Game");
          loadLevel(l);
        });
    }
});



Crafty.scene("Game", function() {

  Crafty.e("2D, Mouse")
      .attr({ w: params.gameWidth, h: params.gameHeight })
      .bind('MouseDown', function() { drawingPath.drawing = true; })
      .bind("MouseMove", function(d) { drawPath(d.x, d.y); })
      .bind('MouseUp', function() { drawingPath.drawing = false; });

})