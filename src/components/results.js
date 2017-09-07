
import React from "react";
import ResultsListItem from "./results_list_item";

const Results = props => {
	if (!props.results.length) {
		return null
	}
	const articleItems = props.results.map((article, index) => {
		if (index < 5) {
			console.log(article._id);
			console.log('results props: ', props)
			return <ResultsListItem key={article._id} article={article} getArticles={props.getArticles} />;
		}
	});
	console.log('articleItems: ', articleItems)
	return (
		<div>
			<div className="card">
				<div className="card-block">
					<h2>Search Results</h2>
					<div>{articleItems}</div>
				</div>
			</div>
		</div>
	);
};

export default Results;
