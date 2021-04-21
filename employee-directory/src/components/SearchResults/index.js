import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table search-results">
      <tbody className="table">
        <tr>
          <th id="name">Name</th>
          <th id="address">Address</th>
          <th id="username">UserName</th>
        </tr>
        {props.results[0] !== undefined && props.results[0].name !== undefined ? (props.results.map(result => (
          <tr key={result.login.uuid}>
            <td headers="name">
              {`${result.name.first} ${result.name.last}`}
            </td>
            <td headers="address">
              {`${result.location.street.number} ${result.location.street.name}, ${result.location.city}, ${result.location.country}`}
            </td>
            <td headers="username">{result.login.username}</td>
          </tr>
        ))) : (<></>)}
      </tbody>
    </table>
  );
}

export default SearchResults;
