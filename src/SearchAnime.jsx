import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function SearchAnime({ animeList, search }) {
  const animesearch = search;

  if (!animeList || animeList.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="flex flex-col mt-12">
        <p className="border-b-[1px] mx-[16vw] mb-2 pb-2 text-white font-roboto">
          Search Results for: "{animesearch}"
        </p>
        <button className="flex w-16 justify-center float-start mb-5 mx-[16vw] text-[#dbdbdb] font-lato border-2 px-2 py-1 rounded-md hover:text-[#000000] hover:bg-white transition ease-in hover:border-3 ">
          <Link to="/">back</Link>
        </button>
        <div className="flex flex-wrap flex-row justify-center mb-5 mx-[16vw]">
          {animeList.map((anime) => (
            <Link
              key={anime.mal_id}
              to={`/getAnime/${anime.mal_id}/`}
              className="m-3"
            >
              <div key={anime.mal_id}>
                <img
                  src={anime.images.jpg.large_image_url}
                  className="rounded-md w-44 h-64"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchAnime;
