import React from 'react';

const Search = props => 
<div>
    <form className="search">
	    <div className="form-group">
	      <label htmlFor="search">subject:</label>
	      <input
	        value={props.search}
	        onChange={props.handleInputChange}
	        name="search"
	        type="text"
	        className="form-control"
	        placeholder="Type in a subject to begin"
	        id="search"
	        />
	    </div>
	    	    <div className="form-group">
	      <label htmlFor="start-date">start date:</label>
	      <input
	        value={props.startDate}
	        onChange={props.handleInputChange}
	        name="startDate"
	        type="text"
	        className="form-control"
	        placeholder="Type in a start date to begin"
	        id="start-date"
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="end-date">end date:</label>
	      <input
	        value={props.endDate}
	        onChange={props.handleInputChange}
	        name="endDate"
	        type="text"
	        className="form-control"
	        placeholder="Type in an end date to begin"
	        id="end-date"
	      />
	    </div>

	      <button
	        type="submit"
	        onClick={props.handleFormSubmit}
	        className="btn btn-success"
	      >
	        Search
	      </button>
	  </form>
</div>;

export default Search;