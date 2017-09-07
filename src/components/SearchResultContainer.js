import React, { Component } from "react";
import Search from "./search";
import Results from "./results";
import API from "../utils/API";
import Saved from './saved'

// Counter to keep track of article numbers as they come in
// var articleCounter = 0;

class SearchResultContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
          search: "news",
          startDate: "2000",
          endDate: "2012",
          results: [],
          saved: [],
          deleted: false
        };
    }

    // Getting all quotes when the component mounts
    componentDidMount() {
      this.getArticles();
    }

    getArticles = () => {
        API.getArticles().then((res) => {
            console.log('saved res.data: ', res.data)
            this.setState({ saved: res.data,
                            deleted: false 
                          });
        });
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
        <Results results={this.state.results} getArticles={this.getArticles} />
        <Saved savedItems={this.state.saved} deleted={this.state.deleted} getArticles={this.getArticles} />
      </div>
    );
  }
}

export default SearchResultContainer;
