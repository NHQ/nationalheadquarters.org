window.onload = function(){

	var Images = [ '20120128181222850_0001 copy.pdf',
	  '20120128181340374_0001 copy.pdf',
	  '3644678120_99dd4bf14f_b.jpg',
	  '4256754810_0991f2548e_o.jpg',
	  '4256755180_f8e5f1afa7_o.jpg',
	  '5384957455_fe7d34ce52_b.jpg',
	  '5385556848_46c431e3dc_b.jpg',
	  '5385617518_3af699585c_b.jpg'
	 ];

	var reel = document.getElementById('film')
		,	container = document.querySelector('.container')
		, head = document.getElementById('header')
		,	profileBio = document.getElementById('profileBio')
		, profileGallery = document.getElementById('profileGallery')
		;
		container.style.width = Math.min(window.innerWidth * .85, 1630) +'px';
		container.style.visibility = 'visible';
	
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
				elem.innerHTML = newStr += ray.splice(0,60).join('');
				if(ray.length) setTimeout(write, 25);
				else {
					var wall = new Masonry( profileGallery , {columnWidth: 340});
					Images.forEach(function(e,i){
						var img = document.createElement('img');
						var imgDiv = document.createElement('div');
						imgDiv.appendChild(img);
						imgDiv.classList.add('imgDiv');
						img.src = '/images/biographical/' + e;
						img.id = e;
						img.style.width = '100%';
						img.onload = function(){
							profileGallery.appendChild(imgDiv);
							wall.reload();
							return
						}
					});
					return
				}
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
			profileContainer.appendChild(profileGallery);
			var xhr = new XMLHttpRequest();
			xhr.open('GET', '/person/' + this.id.toLowerCase());
			xhr.responseType = 'text';
			xhr.onload = function(e){
				if (this.status == 200) {
					container.style.display = 'none';
				
					writeLetters(this.responseText, profileBio);
				}
			};
			xhr.send();
		}
	;

	for(px = profiles.length; px > 0; --px){
	
		var person = profiles[px - 1]
		;
	
		person.onclick = showProfile
	
	}
}