import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchBar(props) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-row justify-around  align-middle shadow-2xl bg-gray-900 py-1 h-[64px]">
        <div className="items-center flex flex-row">
          <a href="/" className="text-white ">
            <img
              src="../images/otaku-compass-logo.png"
              className="w-[112px] m-2"
            />
          </a>
        </div>

        <form
          className="search items-center justify-center flex"
          onSubmit={(e) => {
            props.handleSearch(e);
            navigate("/animeList");
          }}
        >
          <input
            className="h-[36px] w-[16vw] rounded-md px-3 text-white font-righteous bg-slate-800 border-slate-600 border-solid border-2 text-base items-end"
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
          <button
            className="text-gray-800 bg-slate-100 border-2 px-2 py-1 rounded-md hover:text-[#dbdbdb] font-righteous hover:bg-rose-800 transition ease-in hover:border-3 mx-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

export default SearchBar;
