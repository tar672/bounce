var levels = [
	{
		start_x: 100,
		start_y: 0,
		obstacles: [
			{x: 200, y: 0, h: 750, w: 50},
			{x: 400, y: 750, h: 250, w: 50}
		],
		goal: {x: 750, y: 990, h: 10, w: 50},
		bounce: 0.8,
		gravity: 6
	},
	{
		start_x: 300,
		start_y: 0,
		obstacles: [
			{x: 400, y: 350, h: 650, w: 50},
			{x: 500, y: 350, h: 650, w: 50}
		],
		goal: {x: 400, y: 990, h: 10, w: 100},
		bounce: 0.8,
		gravity: 6
	},
	{
		start_x: 100,
		start_y: 0,
		obstacles: [
			{x: 0, y: 500, h: 50, w: 500}
		],
		goal: {x: 100, y: 990, h: 10, w: 100},
		bounce: 0.8,
		gravity: 6
	},
	{
		start_x: 100,
		start_y: 0,
		obstacles: [
			{x: 400, y: 0, h: 450, w: 100},
			{x: 400, y: 550, h: 450, w: 100}
		],
		goal: {x: 750, y: 990, h: 10, w: 50},
		bounce: 0.8,
		gravity: 6
	},
	{
		start_x: 100,
		start_y: 0,
		obstacles: [
		],
		goal: {x: 980, y: 100, h: 50, w: 10},
		bounce: 1,
		gravity: 9
	},
	{
		start_x: 100,
		start_y: 100,
		obstacles: [
			{x: 200, y: 450, h: 550, w: 50},
			{x: 450, y: 0, h: 550, w: 50},
			{x: 500, y: 700, h: 50, w: 300}
		],
		goal: {x: 980, y: 650, h: 50, w: 10},
		bounce: 1,
		gravity: 5
	},
	{
		start_x: 100,
		start_y: 0,
		obstacles: [
			{x: 100, y: 800, h: 50, w: 800}
		],
		goal: {x: 500, y: 790, h: 10, w: 100},
		bounce: 1.5,
		gravity: 6
	},
	{
		start_x: 100,
		start_y: 900,
		obstacles: [
		],
		goal: {x: 900, y: 0, h: 10, w: 100},
		bounce: 1.5,
		gravity: -3
	}
];