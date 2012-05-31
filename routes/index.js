var fs = require('fs')
 	,	order = [
'angeline_gragasin',
'giga_shane',
'meredith_zielke',
'rachel_wolther',
'carl_sondrol',
'alex_mackenzie',
'jeff_katz',
'susan_yi',
'daniel_postilnik',
'rebecca_berdel',
'abby_walton',
'jesse_millward',
];

var humans = fs.readdirSync('humans')
	, people = Object.create(null)
;

// development shiz
var images = fs.readdirSync('public/images/biographical');


while (order.length){
	var Name = order.shift();
	fs.link('humans/'+Name+'/hi_res_thumb.jpg', 'public/images/'+Name+'_hi_res_thumb.jpg')
	people[Name] = {
		name: Name.replace('_', ' '),
		bio: fs.readFileSync('humans/'+Name+'/bio.html', 'utf8'),
		blurb: fs.readFileSync('humans/'+Name+'/blurb.html', 'utf8'),
		biopics: fs.readdirSync('public/images/biopics/' + Name)
	}
	people[Name].biopics.forEach(function(e, i){
		people[Name].biopics[i] = 'images/biopics/' + Name + '/' + e
	});
	people[Name].biopics.forEach(function(e, i){
		if(e.indexOf('.DS') > 1){
			people[Name].biopics.splice(i,1)
		}
	});
	console.log(people[Name].biopics)	
}


var news = fs.readFileSync('news/news.html', 'utf8')
	,	logos = fs.readdirSync('public/images/logos')
	;
var metaData = {
	title: 'NATIONAL HEADQUARTERS'
};


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'NATIONAL HEADQUARTERS', people: people, news: news, logos: logos})
};

exports.person = function(req, res){
	var bio = people[req.params.name].bio;
	res.render('person', {title: 'NATIONAL HEADQUARTERS', bio: bio.slice(bio.indexOf('<p>')), biopics: people[req.params.name].biopics, logos: logos, name:req.params.name.replace('_', ' ').toUpperCase()})
};

exports.bio = function(req, res){
	var bio = people[req.params.name].bio;
	res.writeHead('200');
	res.end(bio);
};