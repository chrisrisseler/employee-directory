import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={e => props.handleInputChange(e)}
          name="person"
          type="text"
          className="form-control"
          placeholder="Type in a search"
        // id="person"
        />
        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
