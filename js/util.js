/*****************************************/
//Utility

function getCanvasContext() {
	return ctx;
}

function clearCanvas() {
	ctx.clearRect(0, 0, 600, 600);
}

function drawRect() {
	//var c = document.getElementById("myCanvas");
	//var ctx = c.getContext("2d");
	
	ctx.fillStyle="blue";
	ctx.fillRect(0, 0, 10, 10);
}

function drawCircle(x, y, r) {
	//var c = document.getElementById("myCanvas");
	//var ctx = c.getContext("2d");
	
	ctx.beginPath();
	ctx.strokeStyle = "#46A546";
	ctx.arc(x, y, r, 0, 2.0*Math.PI);
	ctx.stroke();
}

function drawText(message) {
	//var c = document.getElementById("myCanvas");
	//var ctx = c.getContext("2d");
	
	ctx.font = "30px Arial Narrow";
	ctx.fillText(message, 50, 50);
}

function drawLine(x, y, x2, y2) {
	//var c = document.getElementById("myCanvas");
	//var ctx = c.getContext("2d");
	
	ctx.strokeStyle = "#46A546";
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}
