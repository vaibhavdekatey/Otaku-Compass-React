import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function AnimeCard() {
  const { id } = useParams();
  const url = "https://api.jikan.moe/v4";
  const [fetchAnime, setFetchAnime] = useState([]);

  const fetchAnimefromList = async (id) => {
    const animefetch = await axios.get(url + `/anime/${id}/full`);
    setFetchAnime(animefetch.data.data);
  };

  useEffect(() => {
    fetchAnimefromList(id);
  }, []);

  if (!fetchAnime || fetchAnime.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <button>
        <NavLink to="/animeList">back</NavLink>
      </button>

      {/* {console.log(fetchAnime)} */}
      <h1>{fetchAnime.title}</h1>
      <h1>{fetchAnime.title_japanese}</h1>
      <img src={fetchAnime.images?.jpg.large_image_url} alt="" />
      <p>Rating: {fetchAnime.rating}</p>
      <p>Type: {fetchAnime.type}</p>
      <p>Score: {fetchAnime.score}</p>
      <p>Duration: {fetchAnime.duration}</p>
      <p>Episodes: {fetchAnime.episodes}</p>
      <p>Synopsis: {fetchAnime.synopsis}</p>
    </>
  );
}

export default AnimeCard;
