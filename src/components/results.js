import React from 'react';

const Results = props => 
<div>
	<h1 className="title">Friends List</h1>
	{props.results.map(article =>
	  <div>
	  	<div className="card">
		  <div className="card-block">
		    {article.headline.main}
		    <span><button type="button" className="btn btn-outline-primary">Primary</button></span>
		  </div>
		</div>  	
	  </div>
	)}
</div>;

export default Results;