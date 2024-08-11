import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import RandomAnime from "./RandomAnime";
import axios from "axios";
import RandomAnimeCard from "./RandomAnimeCard";
import SearchAnime from "./SearchAnime";
import SearchBar from "./SearchBar";
import AnimeCard from "./AnimeCard";

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
    images: {
      jpg: {
        image_url: "",
        small_image_url: "",
        large_image_url: "",
      },
    },
  });

  const fetchRandomAnime = async () => {
    const randomAnime = await axios.get(url + `/random/anime?sfw`);
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
        </>
      ),
    },
    {
      path: "/Random",
      element: <RandomAnimeCard ranime={ranime} />,
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
          <SearchAnime animeList={animeList} />
        </>
      ),
    },
    {
      path: "/getAnime/:id",
      element: <AnimeCard />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
