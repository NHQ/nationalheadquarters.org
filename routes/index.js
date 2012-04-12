var metaData = {
	title: 'NATIONAL HEADQUARTERS'
};


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'NATIONAL HEADQUARTERS' })
};

exports.people = function(req, res){
	var includes = 'include bio/' + req.params.name + '.html';
	res.render('people', {title: metaData.title, includes: includes, person: [req.params.name]})
}