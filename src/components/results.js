
import React from "react";
import ResultsListItem from "./results_list_item";

const Results = props => {
	const articleItems = props.results.map((article, index) => {
		if (index < 5) {
			console.log(article._id);
			return <ResultsListItem key={article._id} article={article} />;
		}
	});
	return (
		<div>
			<div>{articleItems}</div>
		</div>
	);
};

export default Results;
