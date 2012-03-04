var ctx;
var radar;
var planes;

$(document).ready(function() {
	initCanvas();

	createPlanes();

	draw();
	var id = window.setInterval("draw()", 1000);
	
	
});

function initCanvas() {
	var c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	
	radar = new Radar();
	planes = new Array();
}

function createPlanes() {
	var p1 = new Plane(210, 220, "WT-2341", 8000);
	var p2 = new Plane(500, 120, "CS-7211", 3000);
	
	planes.push(p1);
	planes.push(p2);	
	
	return planes
}

function draw() {
	//clear canvas
	clearCanvas();

	//re draw the radar
	radar.draw(ctx);
	
	//draw planes
	for(var p in planes) {
		planes[p].draw();
	}
}


