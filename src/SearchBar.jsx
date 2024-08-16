import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchBar(props) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-row justify-around mt-2 align-middle">
        <div className="items-center flex flex-row">
          <Link to="/" className="text-white ">
            Hello
          </Link>
        </div>
        <div className="items-center justify-center ">
          <form
            className="search"
            onSubmit={(e) => {
              props.handleSearch(e);
              navigate("/animeList");
            }}
          >
            <input
              className="h-[36px] rounded-md px-3 border-0 font-roboto"
              type="search"
              placeholder="Search for an anime..."
              required
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
            <button
              className="text-[#dbdbdb] font-lato border-2 px-2 py-1 rounded-md hover:text-[#000000] hover:bg-white transition ease-in hover:border-3 mx-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default SearchBar;
