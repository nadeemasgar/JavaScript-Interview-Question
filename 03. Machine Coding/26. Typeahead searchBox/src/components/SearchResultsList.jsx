import React from "react";
import "./SearchResultsList.css";

function SearchResultsList({ results, setInput }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div
            key={id}
            className="results"
            onClick={() => setInput(result.name)}
          >
            {result.name}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResultsList;
