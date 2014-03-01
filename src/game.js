var params = {
	pathPartSize: 10,
	gameHeight: $(window).height()-20,
	gameWidth: $(window).width()-20
};


function loadLevel(l) {
	Crafty.scene("Game");

	resetLevel();

	Game.state.level = l;
	Game.progress.score --;
	
	l = levels[l];

	Crafty.box2D.init(0, l.gravity, 32, true);

	
	var fx = params.gameWidth/1000;
	var fy = params.gameHeight/1000;

	Crafty.e("Goal")
		.attr({x: l.goal.x*fx, y: l.goal.y*fy, w: l.goal.w*fx, h: l.goal.h*fy});

	for(var o_i in l["obstacles"]){
		var o = l["obstacles"][o_i];

		var e = Crafty.e("Obstacle")
			.attr({x: o.x*fx, y: o.y*fy, w: o.w*fx, h: o.h*fy})
			.box2d({bodyType: "static"});
	}

	Crafty.e('Ball')
  	.attr({x: l.start_x*fx, y: l.start_y*fy})
  	.box2d({
			bodyType: 'dynamic',
			shape: "circle",
			friction : 10,
			restitution: l.bounce
		});
}

function wonLevel() {
	Game.progress.score += 2;
	Game.progress.completed[Game.state.level] = true;
	Crafty.scene("Levels");
}


function drawPath(x, y){
	if(!Game.drawingPath.drawing) return;

	var nextPoint = getNextPoint(Game.drawingPath.prevx, Game.drawingPath.prevy, x,y);
	

	do {
		nextPoint = getNextPoint(Game.drawingPath.prevx, Game.drawingPath.prevy, x, y);
		
		Crafty.e("PathPart")
			.attr({x: nextPoint[1], y: nextPoint[2]})
			.box2d({
					bodyType: 'static',
					shape: "circle",
					friction : 10
			});

		Game.drawingPath.prevx = x;
		Game.drawingPath.prevy = y;
	} while (nextPoint[0]);

}


Game = {
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(params.gameWidth, params.gameHeight);
    Crafty.box2D.init(0, 6, 32, true);
    Crafty.background("#FFFFFF url('assets/bg.jpg') repeat center center");

  	Crafty.scene("Levels");



  },
  

	state: {
		level: null
	}

}



function getNextPoint(x_current, y_current, x_goal, y_goal) {
	var delta_x = x_current - x_goal;
	var delta_y = y_current - y_goal;
	var goal_dist = Math.sqrt( (delta_x * delta_x) + (delta_y * delta_y) );
	
	if (goal_dist > params.pathPartSize && Game.prevx) {
	    var ratio = params.pathPartSize / goal_dist;
	    var x_move = ratio * delta_x; 
	    var y_move = ratio * delta_y;
	    return [true, x_current - x_move, y_current - y_move];
	}
	else return [false, x_goal, y_goal];
}


function resetLevel() {
	Game.drawingPath = {
		drawing: false,
		prevx: null,
		prevy: null
	};

}


Crafty.sprite("assets/apple.png", {spr_ball:[0,0, 256, 256]});


$(window).bind('beforeunload', function(event){
        Crafty.storage("progress", Game.progress);
 });

$(window).ready(function() {
	if(Crafty.storage("progress")){
  	Game.progress = Crafty.storage("progress")
  }
  else {
		Game.progress = {
			score: 0,
			completed: []
		}
	}
	window.addEventListener('load', Game.start);

});

$('body').mouseleave(function() {Game.drawingPath.drawing = false; });