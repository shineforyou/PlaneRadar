function Radar() {
	var _this = this;
	_this.ctx;
	
	var init = function() {
		_this.ctx = getCanvasContext();
	}
	
	_this.draw = function() {
		drawCircle(300, 300, 50);
		drawCircle(300, 300, 130);
		drawCircle(300, 300, 210);
		drawCircle(300, 300, 290);
	
		drawLine(0, 300, 600, 300);
		drawLine(300, 0, 300, 600);
		
		_this.ctx.save();
	}
	
	init();
}
