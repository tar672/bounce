Crafty.c('Ball', {
  init: function() {
    this.requires('2D, Canvas, Color, Box2D, Collision');
    this.color('red');
    this.w = 30;
		this.h = 30;


		this.onHit("Goal", function() {
			alert("you won");
		})
  }
});


Crafty.c("PathPart", {
	init: function() {
		this.requires("2D, Canvas, Color, Box2D");
		this.color("blue");
		this.w = 5;
		this.h = 5;
	}
});

Crafty.c("Goal", {
	init: function() {
		this.requires("2D, Canvas, Color, COllision");
		this.color("yellow");

		
	}
})

Crafty.c("Obstacle", {
	init: function() {
		this.requires("2D, Canvas, Color, Box2D");
		this.color("black");
	}
})
