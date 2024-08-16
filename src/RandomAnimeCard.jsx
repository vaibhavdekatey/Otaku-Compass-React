import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function RandomAnimeCard({ ranime }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "70vh",
        marginBottom: "20px",
      }}
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
          zIndex: -2, // Ensure this is behind all content
        }}
      />
      {/* <div
        style={{
          backgroundColor: "black",

          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "60vh",
        }}
      /> */}

      <div className="relative z-10 flex flex-col items-start mx-72 my-[18vh]">
        <button>
          <NavLink to="/">back</NavLink>
        </button>
        <div className="flex flex-row">
          <img
            className="w-[288px] h-[398px] mr-10 rounded-lg"
            src={ranime.images.jpg?.large_image_url}
            alt={ranime.title}
          />
          <div className="flex flex-col">
            <h1 className="text-white font-montserrat text-4xl">
              {ranime.title}
            </h1>
            <h2 className="text-white text-2xl font-lato">
              Japanese Title: {ranime.title_japanese}
            </h2>
            <h3 className="text-white">Type: {ranime.type}</h3>
            <div className="flex flex-row">
              {Array.isArray(ranime.genres) && ranime.genres.length > 0 ? (
                ranime.genres.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className=" border-2 p-1 px-2 mr-2 my-2 rounded-3xl flex justify-center text-black-50/70 bg-slate-100/85 flex-row drop-shadow-2xl"
                  >
                    {genre.name}
                  </span>
                ))
              ) : (
                <p className="text-white font-roboto">No genres available</p>
              )}
            </div>

            <p className="text-white font-roboto">{ranime.synopsis}</p>
            <p className="text-white font-roboto">Score: {ranime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomAnimeCard;
