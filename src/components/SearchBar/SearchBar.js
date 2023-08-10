import { useState } from "react";
import "./SearchBar.scss";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSearch} className="SearchBar__form">
        <input
          type="text"
          placeholder="Search for sneakers..."
          value={query}
          onChange={handleQueryChange}
          className="SearchBar__input"
        />
        <div className="SearchBar__button-container">
          <button className="SearchBar__button">SEARCH</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
