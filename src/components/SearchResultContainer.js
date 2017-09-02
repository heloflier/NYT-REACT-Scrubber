import React, { Component } from "react";
import Search from "./search";
import API from "../utils/API";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Counter to keep track of article numbers as they come in
var articleCounter = 0;

class SearchResultContainer extends Component {
  state = {
    search: "",
    startDate: "",
    endDate: "",
    results: []
  };

  componentDidMount() {

  }

  searchAPI = () => {
    let search = this.state.search
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
                authKey + 
                "&q="+
                search + 
                "&begin_date=" + 
                startDate +
                "&end_date=" +  
                endDate;

    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));

    console.log('query: ', query);
    console.log('results: ', this.state.results);
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchAPI();
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
