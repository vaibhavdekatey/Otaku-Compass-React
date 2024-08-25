import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import RandomAnime from "./RandomAnime";
import axios from "axios";
import RandomAnimeCard from "./RandomAnimeCard";
import SearchAnime from "./SearchAnime";
import SearchBar from "./SearchBar";
import AnimeCard from "./AnimeCard";
import "./App.css";
import Footer from "./Footer";

function App() {
  const url = "https://api.jikan.moe/v4";
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [ranime, setRAnime] = useState({
    mal_id: "",
    title: "",
    title_japanese: "",
    score: "",
    synopsis: "",
    type: "",
    rating: "",
    episodes: "",
    genres: {
      name: "",
    },
    images: {
      jpg: {
        image_url: "",
        small_image_url: "",
        large_image_url: "",
      },
    },
  });

  const fetchRandomAnime = async () => {
    const randomAnime = await axios.get(
      url + `/random/anime?sfw&?min_score=6.0`
    );
    setRAnime(randomAnime.data.data);
    // console.log(randomAnime);
  };

  const searchAnime = async () => {
    return "<h1>lol</h1>";
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnimeList(search);
  };

  const fetchAnimeList = async (query) => {
    const temp = await axios.get(url + `/anime?q=${query}`);
    // console.log(temp.data.data);
    setAnimeList(temp.data.data);
    // setAnimeList(temp.data.data);
  };

  useEffect(() => {
    fetchRandomAnime();
    searchAnime();
  }, []);

  useEffect(() => {
    // console.log(animeList);
  }, [animeList]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <SearchBar
            search={search}
            setSearch={setSearch}
            animeList={animeList}
            handleSearch={handleSearch}
          />
          <RandomAnime fetchRandomAnime={fetchRandomAnime} />
          <Footer className="absolute bottom-0" />
        </>
      ),
    },
    {
      path: "/Random",
      element: (
        <>
          <SearchBar
            search={search}
            setSearch={setSearch}
            animeList={animeList}
            handleSearch={handleSearch}
            className="bg-white"
          />

          <RandomAnimeCard
            ranime={ranime}
            fetchRandomAnime={fetchRandomAnime}
          />

          <Footer />
        </>
      ),
    },
    {
      path: "/animeList",
      element: (
        <>
          <SearchBar
            search={search}
            setSearch={setSearch}
            animeList={animeList}
            handleSearch={handleSearch}
          />
          <SearchAnime animeList={animeList} search={search} />
          <Footer />
        </>
      ),
    },
    {
      path: "/getAnime/:id",
      element: (
        <>
          <SearchBar
            search={search}
            setSearch={setSearch}
            animeList={animeList}
            handleSearch={handleSearch}
          />
          <AnimeCard />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
