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
        className="relative w-full random"
        // style={{
        //   position: "relative",
        //   width: "100%",
        //   height: "70vh",
        //   marginBottom: "20px",
        // }}
      >
        <div
          style={{
            backgroundImage: `url(${fetchAnime.images.jpg?.large_image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(12px) brightness(0.3)", // Apply blur and darken effect
            position: "fixed", // Fix to the entire viewport
            top: 0,
            left: 0,
            width: "100%",
            height: "100%", // Cover the entire viewport
            zIndex: -3, // Ensure this is behind all content
          }}
        />
        <div
          className="bg-slate-900/85 h-[100vh] w-full translate-y-[180px]"
          style={{ zIndex: -1, position: "fixed" }}
        />
        <div className="relative z-10 flex flex-col items-start mx-[18vw] ">
          <button className="my-8 ">
            <NavLink
              to="/animeList"
              className="text-gray-800 bg-slate-100 flex  font-righteous border-2 px-2 py-1 my-5 rounded-md hover:text-[#dbdbdb] hover:bg-slate-800 transition ease-in hover:border-3 "
            >
              back
            </NavLink>
          </button>
          <div className="flex flex-row">
            <img
              className="w-[340px] h-[480px] mr-10 rounded-lg"
              src={fetchAnime.images.jpg?.large_image_url}
              alt={fetchAnime.title}
            />
            <div className="flex flex-col mt-12">
              <h1 className="text-white font-josefin font-semibold text-4xl">
                {fetchAnime.title}
              </h1>
              <h2 className="text-white text-2xl font-josefin">
                Japanese Title: {fetchAnime.title_japanese}
              </h2>
              <h3 className="text-white font-josefin">
                Type: {fetchAnime.type}
              </h3>
              <div className="flex flex-row">
                {Array.isArray(fetchAnime.genres) &&
                fetchAnime.genres.length > 0 ? (
                  fetchAnime.genres.map((genre) => (
                    <span
                      key={genre.mal_id}
                      className=" border-2 p-1 px-2 mr-2 my-2 rounded-3xl flex justify-center items-center text-black-50/70 bg-slate-100/85 flex-row shadow-2xl font-josefin"
                    >
                      {genre.name}
                    </span>
                  ))
                ) : (
                  <p className="text-white font-josefin">No genres available</p>
                )}
              </div>
              <div className="text-white mb-1 font-josefin flex flex-row items-baseline">
                <p className="text-2xl mr-2 ">Score: </p> {fetchAnime.score}
              </div>
              <div className="text-white font-josefin flex flex-row items-baseline">
                <p className="text-2xl mr-2 ">Rating: </p> {fetchAnime.rating}
              </div>

              <p className="text-white font-josefin">{fetchAnime.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeCard;
