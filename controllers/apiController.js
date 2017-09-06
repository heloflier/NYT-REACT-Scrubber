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
  	// This method handles creating new articles
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
    },
      // This method handles deleting articles
    destroy: function(req, res) {
        console.log('in destroy ----------------------------------------')
        console.log('req.params: ', req.params)
        Article.remove({
          _id: req.params.id
        }).then(function(doc) {
          res.json(doc);
        }).catch(function(err) {
          res.json(err);
        });
    }
};