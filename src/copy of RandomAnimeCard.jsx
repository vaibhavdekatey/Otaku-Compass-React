// import React from "react";
// import { NavLink } from "react-router-dom";
// import Footer from "./Footer";

// function RandomAnimeCard({ ranime }) {
//   const show_genre = ranime.genres;
//   console.log(show_genre);
//   return (
//     <>
//       <img
//         src={ranime.images.jpg?.large_image_url}
//         style={{
//           backgroundImage: `url(${ranime.images.jpg?.large_image_url})`,
//           height: "100%",
//           zIndex: -1,
//           position: "relative",
//         }}
//       />
//       <button>
//         <NavLink to="/">back</NavLink>
//       </button>
//       <div key={ranime.mal_id} className="flex flex-row mx-72 my-[18vh]">
//         <img
//           className="w-72 mr-10 rounded-lg"
//           src={ranime.images.jpg?.large_image_url}
//         />
//         <div className="flex flex-col">
//           <h1 className="text-white font-lato text-4xl">
//             Title: {ranime.title}
//           </h1>
//           <h2>Japanese Title: {ranime.title_japanese}</h2>
//           <h3>Type: {ranime.type}</h3>
//           {/* <div>{console.log(ranime.genres)}</div>
//             {ranime?.genres.map((genre) => {
//               <p className="text-white">{genre.name}</p>;
//             })} */}

//           <p>{ranime.synopsis}</p>
//           <p>Score: {ranime.score}</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RandomAnimeCard;
