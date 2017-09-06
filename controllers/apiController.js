const Article = require('../models/Article');

module.exports = {
	// This method handles creating new quotes
  create: function(req, res) {
  	console.log('in create ----------------------------------------')
    Article.create(req.body).then(function(doc) {
      	res.json(doc);
    }).catch(function(err) {
      	res.json(err);
    });
  }
}