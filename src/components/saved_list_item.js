
import React, { Component } from "react";
import API from '../utils/API';
import moment from "moment";



class SavedListItem extends Component {
	constructor(props) {
		super();

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		console.log('delete props: ', this.props);
		const articleId = this.props.article._id;
		API.deleteArticle(articleId)
		.then(this.props.getArticles);
		console.log('deleted props: ', this.props)
	}

	render() {
		return (
			<div className="card">
				<div className="card-block">
					<h4>{this.props.article.title}</h4>
					<p>Date Published: {moment(this.props.article.date).format("MMM Do YYYY")}
						<span>
							<button
								id="remove-button"
								type="button"
								className="btn btn-outline-danger float-right"
								onClick={this.handleButtonClick}
							>
								Remove Article
							</button>
						</span>
					</p>
					<p>
						<a href={this.props.article.url}>link here</a>
					</p>
					
				</div>
			</div>
		);
	}
};

export default SavedListItem;