import React, { Component } from "react";
import Search from "./search";
import Results from "./results";
import API from "../utils/API";

// Counter to keep track of article numbers as they come in
// var articleCounter = 0;

class SearchResultContainer extends Component {
  state = {
    search: "news",
    startDate: "2000",
    endDate: "2012",
    results: []
  };

  componentDidMount() {

  }

  searchAPI = () => {
      let search = this.state.search
      let startDate = this.state.startDate;
      let endDate = this.state.endDate;
      let query = search + 
                  "&begin_date=" + 
                  startDate + "0101" +
                  "&end_date=" +  
                  endDate + "0101"; 

      API.search(query)
        .then(res => {this.setState({ results: res.data.response.docs }); console.log('real results: ', this.state.results)})
        .catch(err => console.log(err));

      console.log('query: ', query);
      this.setState({
                  search: "",
                  startDate: "",
                  endDate: ""
      })
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
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
