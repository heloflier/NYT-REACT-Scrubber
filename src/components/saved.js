
import React from "react";
import SavedListItem from "./saved_list_item";

const Saved = props => {
	if (!props.savedItems.length) {
		return null
	}
	console.log('props in Saved: ', props)
	const savedArticles = props.savedItems.map(article => {
		console.log(article._id);
		return <SavedListItem key={article._id} article={article} />;
	});
//	if (!props.savedItems.length) {return null}
	return (
		<div>
			<div>{savedArticles}</div>
		</div>
	);
};

export default Saved;