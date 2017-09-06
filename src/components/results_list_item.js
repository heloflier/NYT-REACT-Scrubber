import React, { Component } from "react";
import API from '../utils/API';
import moment from "moment";
import Saved from './saved';

class ResultsListItem extends Component {
	constructor(props) {
		super();		

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		console.log('save props: ', this.props);
		const newArticle = this.props.article;
		API.saveArticle(newArticle).then(console.log('newArticle: ', newArticle));
	}

	render() {
		return (
		<div>
			<div className="card">
				<div className="card-block">
					<h4>{this.props.article.headline.main}</h4>
					<p>Date Published: {moment(this.props.article.pub_date).format("MMM Do YYYY")}</p>
					<p>
						<a href={this.props.article.web_url}>link here</a>
					</p>
					<button
						id="save-button"
						type="button"
						className="btn btn-outline-primary float-right"
						onClick={this.handleButtonClick}
					>
						Save Article
					</button>
				</div>
			</div>
		</div>
		);
	}
};

export default ResultsListItem;

