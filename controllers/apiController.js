const Article = require('../models/Article');

module.exports = {
	index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Article.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
	// This method handles creating new quotes
  create: function(req, res) {
  	console.log('in create ----------------------------------------')
  	console.log('req.body: ', req.body)
  	const savedArticle 	= {};
  	savedArticle.title 	= req.body.article.headline.main;
	savedArticle.url	= req.body.article.web_url;
	savedArticle.date	= req.body.article.pub_date;
	console.log('savedArticle: ', savedArticle)
    Article.create(savedArticle).then(function(doc) {
      	res.json(doc);
    }).catch(function(err) {
      	res.json(err);
    });
  }
}