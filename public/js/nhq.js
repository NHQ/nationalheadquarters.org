var Pendulum = function(min, max, startVal, incrby){
	this.min = min
	this.max = max
	this.val = startVal
	this.incrby = incrby
	this.direction = true
	
	return function(){
		switch (this.direction){
			case true:
				if(this.val <= this.max)
					return this.val += this.incrby
					else 
						this.direction = false
						return this.val
			break;
			case false:
				if(this.val >= this.min)
					return this.val -= this.incrby
				else 
					this.direction = true
					return this.val
			break;
		}
		return this.x ? this.x = false : this.x = true
	}	
}
,
swing = Pendulum(0, 255, 0, 5);

var reel = document.getElementById('reel')
	,	container = document.querySelector('.container')
	,	cs = window.getComputedStyle(container)
	,	cr = window.getComputedStyle(reel)
	, ratio = 16/9
;


reel.style.width = cs.getPropertyCSSValue('width').getFloatValue(5) + 'px'
reel.style.height = cr.getPropertyCSSValue('width').getFloatValue(5) * 1 / ratio + 'px'

function Colors(){
	var title = document.getElementById('header'); r = 1;

	return function(){
		var s = swing()
		title.style.color = 'rgb('+s+','+s+','+s+')';
	};
}; 
var colors = new Colors();
setInterval(colors, 21)