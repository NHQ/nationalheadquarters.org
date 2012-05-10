var reel = document.getElementById('film')
	,	container = document.querySelector('.container')
	, head = document.getElementById('header')
	,	profileBio = document.getElementById('profileBio')
	
	;
	
	container.style.width = window.innerWidth * .85 +'px';
	
var cs = window.getComputedStyle(container)
	,	cr = window.getComputedStyle(reel)
	, ratio = 16/9
;

reel.style.width = cs.getPropertyCSSValue('width').getFloatValue(5) * .85 + 'px'
reel.style.height = cr.getPropertyCSSValue('width').getFloatValue(5) * 1 / ratio + 'px'

var profiles = document.querySelectorAll('.person')
	, profileContainer = document.getElementById('profile')
	, plen = profiles.length
	, px
	,	writeLetters = function(str, elem){
		var ray = str.split(''), newStr = '';
		function write(){
			elem.textContent = newStr += ray.shift();
			if(ray.length) setTimeout(write, 42);
			return
		}
		write()
	}
	,	showProfile = function(evt){
		var self = this;
		var pic = this.children[0];
		profileContainer.appendChild(pic);
		pic.classList.add('profilePic');
		profileContainer.style.display = 'block';
		this.name = this.id.toUpperCase().replace('_', ' ');
		profileContainer.appendChild(profileBio);
		writeLetters(this.name, profileBio)
	}
;

for(px = profiles.length; px > 0; --px){
	
	var person = profiles[px - 1]
	;
	
	person.onclick = showProfile
	
}