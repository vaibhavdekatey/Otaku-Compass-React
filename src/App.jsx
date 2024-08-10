import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import './App.css'
import RandomAnime from './RandomAnime'
import axios from "axios";
import AnimeCard from './RandomAnimeCard';

function App() {

  const [ loading, setLoading ] = useState(true);
  const [ search, setSearch ] = useState("");
  const [ animeList, setAnimeList ] = useState([]);
  const [ ranime , setRAnime] = useState({
    mal_id: "",
    title: "",
    title_japanese: "",
    score: "",
    synopsis: "",
    type: "",
    images: {jpg: 
      {
        image_url: "",
        small_image_url: "",
        large_image_url: ""
      }}
  });



  const fetchRandomAnime = async () => {
    const randomAnime = await axios.get(`https://api.jikan.moe/v4/random/anime?sfw`);
    setRAnime(randomAnime.data.data);
    // console.log(randomAnime);
  } 

  const searchAnime = async () => {
    return ('<h1>lol</h1>')
  }

  const handleSearch = e => {
    e.preventDefault();
    fetchAnime(search)
  }

  const fetchAnime = async (query) => {
    const temp = await axios.get(`https://api.jikan.moe/v4/anime/?q=${query}`,
      // {headers:{'access-control-allow-origin':'*'}}
    ).then((res) => {
      setAnimeList(res.data.data)
    })
    // console.log(temp.data.data);
    
    // setAnimeList(temp.data.data);
    console.log(animeList);
  }



  useEffect(() => {
    setLoading(true)

    fetchRandomAnime()
    searchAnime()
  },[])



  const router = createBrowserRouter([
    {
      path: '/',
      element:<>
      <RandomAnime 
        fetchRandomAnime= {fetchRandomAnime}
        search= {search}
        setSearch= {setSearch}
        animeList = {animeList}
        handleSearch= {handleSearch}
      />
      </>
    },{
      path: '/Random',
      element: <AnimeCard 
        ranime ={ranime}
      />
    }
  ])

  return (
    <>
      <RouterProvider router={router} /> 
      
    </>
  )
}

export default App
 