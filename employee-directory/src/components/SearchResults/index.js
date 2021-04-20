import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table search-results">
      <tbody className="table">
        {props.results[0] !== undefined && props.results[0].name !== undefined ? (props.results.map(result => (
          <tr key={result.login.uuid}>
            <td>
              {`${result.name.first} ${result.name.last}`}
            </td>
            <td>
              {`${result.location.street.number} ${result.location.street.name}`}
            </td>
          </tr>
        ))) : (<></>)}
      </tbody>
    </table>
  );
}

export default SearchResults;
