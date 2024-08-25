import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function RandomAnimeCard({ ranime, fetchRandomAnime }) {
  return (
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
          backgroundImage: `url(${ranime.images.jpg?.large_image_url})`,
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
        <div className="my-8 flex flex-row justify-between min-w-full">
          <a
            href="/"
            className="text-gray-800 bg-slate-100 flex  font-righteous border-2 px-2 py-1 my-5 rounded-md hover:text-[#dbdbdb] hover:bg-slate-800 transition ease-in hover:border-3 "
          >
            Back
          </a>
          <a
            className="text-gray-800 bg-slate-100 flex  font-righteous border-2 px-2 py-1 my-5 rounded-md hover:text-[#dbdbdb] hover:bg-slate-800 transition ease-in hover:border-3 "
            href="/Random"
            onClick={() => {
              fetchRandomAnime;
            }}
          >
            Get Another Random Anime
          </a>
        </div>
        <div className="flex flex-row">
          <img
            className="w-[340px] h-[480px] mr-10 rounded-lg"
            src={ranime.images.jpg?.large_image_url}
            alt={ranime.title}
          />
          <div className="flex flex-col mt-20">
            <h1 className="text-white font-josefin font-semibold text-4xl">
              {ranime.title}
            </h1>
            <h2 className="text-white text-2xl font-josefin">
              Japanese Title: {ranime.title_japanese}
            </h2>
            <h3 className="text-white font-josefin">Type: {ranime.type}</h3>
            <div className="flex flex-row">
              {Array.isArray(ranime.genres) && ranime.genres.length > 0 ? (
                ranime.genres.map((genre) => (
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
              <p className="text-2xl mr-2 ">Score: </p> {ranime.score}
            </div>
            <div className="text-white font-josefin flex flex-row items-baseline">
              <p className="text-2xl mr-2 ">Rating: </p> {ranime.rating}
            </div>
            <div className="text-white font-josefin flex flex-row items-baseline">
              <p className="text-2xl mr-2 ">Episodes : </p> {ranime.episodes}
            </div>

            <p className="text-white font-josefin">{ranime.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomAnimeCard;
