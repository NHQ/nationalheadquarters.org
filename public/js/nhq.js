

var Froogaloop=function(){function e(c){return new e.fn.init(c)}function g(c,b,a){if(!a.contentWindow.postMessage)return!1;var d=a.getAttribute("src").split("?")[0],c=JSON.stringify({method:c,value:b});a.contentWindow.postMessage(c,d)}function i(c){var b,a;try{b=JSON.parse(c.data),a=b.event||b.method}catch(l){}"ready"==a&&!h&&(h=!0);if(c.origin!=j)return!1;var c=b.value,e=b.data,f=""===f?null:b.player_id;b=f?d[f][a]:d[a];a=[];if(!b)return!1;void 0!==c&&a.push(c);e&&a.push(e);f&&a.push(f);return 0<
a.length?b.apply(null,a):b.call()}function k(c,b,a){a?(d[a]||(d[a]={}),d[a][c]=b):d[c]=b}var d={},h=!1,j="";e.fn=e.prototype={element:null,init:function(c){"string"===typeof c&&(c=document.getElementById(c));this.element=c;for(var c=this.element.getAttribute("src").split("/"),b="",a=0,d=c.length;a<d;a++){if(3>a)b+=c[a];else break;2>a&&(b+="/")}j=b;return this},api:function(c,b){if(!this.element||!c)return!1;var a=this.element,d=""!==a.id?a.id:null,e=!b||!b.constructor||!b.call||!b.apply?b:null,f=
b&&b.constructor&&b.call&&b.apply?b:null;f&&k(c,f,d);g(c,e,a);return this},addEvent:function(c,b){if(!this.element)return!1;var a=this.element,d=""!==a.id?a.id:null;k(c,b,d);"ready"!=c?g("addEventListener",c,a):"ready"==c&&h&&b.call(null,d);return this},removeEvent:function(c){if(!this.element)return!1;var b=this.element,a;a:{if((a=""!==b.id?b.id:null)&&d[a]){if(!d[a][c]){a=!1;break a}d[a][c]=null}else{if(!d[c]){a=!1;break a}d[c]=null}a=!0}"ready"!=c&&a&&g("removeEventListener",c,b)}};e.fn.init.prototype=
e.fn;window.addEventListener?window.addEventListener("message",i,!1):window.attachEvent("onmessage",i,!1);return window.Froogaloop=window.$f=e}();

/*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("domready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

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

var reel = document.getElementById('film')
	,	container = document.querySelector('.container')
	;
	
	container.style.width = window.innerWidth * .85 +'px';
	
	var cs = window.getComputedStyle(container)
	,	cr = window.getComputedStyle(reel)
	, ratio = 16/9
	;
window.domready(function(a,b){console.log('ding')});
window.onload = function(){
	var frame = document.querySelector('iframe');
	
$f(frame[0]).addEvent('loadProgress', function(data) {console.log(data)})	
}
reel.style.width = cs.getPropertyCSSValue('width').getFloatValue(5) + 'px'
reel.style.height = cr.getPropertyCSSValue('width').getFloatValue(5) * 1 / ratio + 'px'

var peeps = document.querySelectorAll('.rollover')
	, tip = document.createElement('div')
;
tip.classList.add('tip');
tip.innerHTML = '<h2>Profile Coming Soon</h2>'

function rollOver(e){
	console.log(this.parentNode)
	tip.style.display = 'block';
	this.parentNode.appendChild(tip)
//	tip.style.left = e.pageX + 'px';
//	tip.style.top = e.pageY + 'px';
}
function rollOut(){
	tip.style.display = 'none'
}
for(x = peeps.length - 1; x >= 0; --x){
	var elem = peeps[x]
	;
	elem.addEventListener('mouseover', rollOver, false);
	elem.addEventListener('mouseout', rollOut, false);
}

function Colors(){
	var title = document.getElementById('header'); r = 1;

	return function(){
		var s = swing()
		title.style.color = 'rgb('+s+','+s+','+s+')';
	};
}; 
var colors = new Colors();
