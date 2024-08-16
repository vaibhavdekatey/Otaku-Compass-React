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

  const genre_show = fetchAnime.genres;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${fetchAnime.images.jpg?.large_image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "blur(12px) brightness(0.4)", // Apply blur and darken effect
          position: "fixed", // Fix to the entire viewport
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", // Cover the entire viewport
          zIndex: -1, // Ensure this is behind all content
        }}
      />
      <div className="relative z-10 flex flex-col items-start mx-72 my-[18vh]">
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

        {genre_show?.map((gen) => (
          <p key={gen.mal_id} className="text-white">
            {gen.name}
          </p>
        ))}

        <p>Duration: {fetchAnime.duration}</p>
        <p>Episodes: {fetchAnime.episodes}</p>
        <p>Synopsis: {fetchAnime.synopsis}</p>
      </div>
    </>
  );
}

export default AnimeCard;
