import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const secret = import.meta.env.VITE_10_VAR

import './App.css'

function App() {



  return (
    <>
      <h1>XXX</h1>
      <h3>TEST of Secret: {secret}</h3>
    </>
  )
}

export default App

/*   
  Movies: /api/movies
 {
    "id": "YqYJsEh",
    "type": "Movie",
    "title": "Ricky Velez: Here's Everything",
    "country": "",
    "dateAdded": "October 24, 2021",
    "releaseYear": 2021,
    "rating": "TV-MA",
    "duration": "",
    "listedIn": "Comedy, Stand Up",
    "description": "​Comedian Ricky Velez bares it all with his honest lens and down to earth perspective in his first-ever HBO stand-up special."
  },

Shows: /api/shows
  {
    "id": "SLHUwyN",
    "type": "TV Show",
    "title": "Scream Queens",
    "country": "United States",
    "dateAdded": "",
    "releaseYear": 2015,
    "rating": "TV-14",
    "duration": "2 Seasons",
    "listedIn": "Comedy, Horror, Mystery",
    "description": "SCREAM QUEENS is a new genre-bending comedy-horror anthology series. The series, produced by 20th Century Fox Television, is from Ryan Murphy, Brad Falchuk, Ian Brennan and Dante Di Loreto, the executive producers of GLEE and “American Horror Story.” The first installment in the new anthology series revolves around a college campus which is rocked by a series of murders."
  },
*/