
import React, { Component } from "react";
import ResultsListItem from "./results_list_item";
import moment from "moment";



class SavedListItem extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="card">
				<div className="card-block">
					<h4>{this.props.article.title}</h4>
					<p>Date Published: {moment(this.props.article.date).format("MMM Do YYYY")}</p>
					<p>
						<a href={this.props.article.url}>link here</a>
					</p>
					<button
						id="remove-button"
						type="button"
						className="btn btn-outline-danger float-right"
					>
						Remove Article
					</button>
				</div>
			</div>
		);
	}
};

export default SavedListItem;