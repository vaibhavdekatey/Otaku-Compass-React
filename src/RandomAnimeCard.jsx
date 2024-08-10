import React from 'react'

function AnimeCard({ ranime }) {
  return (
    <>
        <h1 key= {ranime.mal_id}>Title: {ranime.title}</h1>
        <h2>Japanese Title: {ranime.title_japanese}</h2>
        <h3>Type: {ranime.type}</h3>
        <img src={ranime.images.jpg?.image_url} />
        <p>{ranime.synopsis}</p>
        <p>Score: {ranime.score}</p>

    </>
  )
}

export default AnimeCard

