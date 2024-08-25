import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function SearchAnime({ animeList, search }) {
  const animesearch = search;

  if (!animeList || animeList.length === 0) {
    return (
      <h1 className=" flex random justify-center items-center text-white font-righteous">
        Loading...
      </h1>
    );
  }
  return (
    <>
      <div className="flex flex-col mt-10 mx-64 random">
        <p className="border-b-4 border-slate-500 mb-2 pb-2 text-white font-righteous text-xl">
          Search Results for: "{animesearch}"
        </p>
        <button className="text-gray-800 bg-slate-100 flex w-fit font-righteous border-2 px-2 py-1 my-5 rounded-md hover:text-[#dbdbdb] hover:bg-slate-800 transition ease-in hover:border-3  ">
          <Link to="/">back</Link>
        </button>
        <div className="flex flex-wrap flex-row justify-center mb-5 ">
          {animeList.map((anime) => (
            <Link
              key={anime.mal_id}
              to={`/getAnime/${anime.mal_id}/`}
              className="m-2"
            >
              <div key={anime.mal_id}>
                <div className="bg-rose-800 rounded-md w-52 h-72 -z-1 shadow-2xl">
                  <img
                    src={anime.images.jpg.large_image_url}
                    className="rounded-md w-52 h-72 hover:-translate-y-2  hover:shadow-2xl hover:border-spacing-0  transition-transform ease-in"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchAnime;
