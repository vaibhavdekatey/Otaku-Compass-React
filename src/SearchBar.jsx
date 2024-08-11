import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function SearchBar(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-head">
        <form
          className="search-box"
          onSubmit={(e) => {
            props.handleSearch(e);
            navigate("/animeList");
          }}
        >
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
