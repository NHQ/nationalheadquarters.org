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

console.log(images)

while (order.length){
	var Name = order.shift();
	fs.link('humans/'+Name+'/hi_res_thumb.jpg', 'public/images/'+Name+'_hi_res_thumb.jpg')
	people[Name] = {
		name: Name.replace('_', ' '),
		bio: fs.readFileSync('humans/'+Name+'/bio.html', 'utf8'),
		blurb: fs.readFileSync('humans/'+Name+'/blurb.html', 'utf8')
	}
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

exports.bio = function(req, res){
	var bio = people[req.params.name].bio;
	console.log(bio);
	res.writeHead('200');
	res.end(bio);
};