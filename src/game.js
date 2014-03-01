var params = {
	pathPartSize: 5,
	gameHeight: $(window).height()-20,
	gameWidth: $(window).width()-20
};


function loadLevel(l) {
	l = levels[l];

	var fx = params.gameWidth/1000;
	var fy = params.gameHeight/1000;

	Crafty.e("Goal")
		.attr({x: l.goal.x*fx, y: l.goal.y*fy, w: l.goal.w*fx, h: l.goal.h*fy});

	for(o_i in l["obstacles"]){
		var o = l["obstacles"][o_i];

		Crafty.e("Obstacle")
			.attr({x: o.x*fx, y: o.y*fy, w: o.w*fx, h: o.h*fy})
			.box2d({bodyType: "static"});
	}

	Crafty.e('Ball')
  	.attr({x: l.start_x*fx, y: l.start_y*fy})
  	.box2d({
			bodyType: 'dynamic',
			shape: "circle",
			friction : 10,
			restitution: 0.8
		});
}


function drawPath(x, y){
	if(!Game.drawingPath.drawing) return;
	if(  Math.abs(x - Game.drawingPath.prevx) < params.pathPartSize && Math.abs(x - Game.drawingPath.prevx) < params.pathPartSize) return;

	Game.drawingPath.prevx = x;
	Game.drawingPath.prevy = y;
	
	//TODO: fill blanks
	Crafty.e("PathPart")
		.attr({x: x, y: y})
		.box2d({
				bodyType: 'static',
				shape: "circle",
				friction : 10
		});
}


Game = {
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(params.gameWidth, params.gameHeight);
    Crafty.box2D.init(0, 6, 32, true);
    Crafty.background('green');

  	Crafty.scene("Levels");

  },

  drawingPath : {
		drawing: false,
		prevx: null,
		prevy: null
	},

	progress: {
		score: 0
	}

}