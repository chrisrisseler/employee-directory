import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table search-results">
      <tbody className="table">
        {/* <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>UserName</td>
          </tr>
        </thead> */}
        {props.results[0] !== undefined && props.results[0].name !== undefined ? (props.results.map(result => (
          <tr key={result.login.uuid}>
            <td>
              {`${result.name.first} ${result.name.last}`}
            </td>
            <td>
              {`${result.location.street.number} ${result.location.street.name}, ${result.location.city}, ${result.location.country}`}
            </td>
            <td>{result.login.username}</td>
          </tr>
        ))) : (<></>)}
      </tbody>
    </table>
  );
}

export default SearchResults;
