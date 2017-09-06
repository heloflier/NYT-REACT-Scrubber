
import React from "react";
import ResultsListItem from "./results_list_item";

const Results = props => {
	const articleItems = props.results.map(article => {
		console.log(article._id);
		return <ResultsListItem key={article._id} article={article} />;
	});
	return (
		<div>
			<div>{articleItems}</div>
		</div>
	);
};

export default Results;
