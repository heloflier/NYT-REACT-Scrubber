
// ============================================================================
//                     			Articles Schema        
// ============================================================================

const mongoose	= require('mongoose');
const Schema	= mongoose.Schema;

const ArticleSchema = new Schema({
			title: 	{ 
				type: 		String, 
				unique: 	true, 
				required: 	true, 
				dropDups: 	true 
			},
			url: 	{
				type: 		String, 
				unique: 	true, 
				required: 	true, 
				dropDups: 	true
			},
			date: 	{
				type: 		Date,
				required: 	true
			},
			documents: [{
					type: Schema.ObjectId,
					ref : 'Document'
			}]
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;