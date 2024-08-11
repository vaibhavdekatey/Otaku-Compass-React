import React from "react";
import { Link } from "react-router-dom";

function SearchAnime({ animeList }) {
  if (!animeList || animeList.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <button>
        <Link to="/">back</Link>
      </button>
      <div>
        {animeList.map((anime) => (
          <Link key={anime.mal_id} to={`/getAnime/${anime.mal_id}/`}>
            <div key={anime.mal_id}>
              <img src={anime.images.jpg.image_url} />
              <p>{anime.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SearchAnime;
