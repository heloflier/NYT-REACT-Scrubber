import axios from "axios";

const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY   = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryFix = "&q=";

const API = {
  // Retrieves all articles from the db
  getArticles: function() {
    return axios.get(process.env.API_HOST + "/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(article) {
    return axios.post(process.env.API_HOST + "/api/articles", { article });
  },
  // Deletes a article from the db
  deleteArticle: function(id) {
    return axios.delete(process.env.API_HOST + `/api/articles/${id}`);
  },
  // Toggles a article's favorite property in the db
  favoriteArticle: function(article) {
    article.favorited = !article.favorited;
    const { _id, favorited } = article;
    return axios.patch(process.env.API_HOST + `/api/articles/${_id}`, { favorited });
  },
  search: function(query) {
  	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
    return axios.get(BASEURL + APIKEY + queryFix + query);
  }
};

export default API;

