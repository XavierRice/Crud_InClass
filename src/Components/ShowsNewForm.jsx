import { useState } from "react";


const ShowsNewForm = () => {

  
  const [title, setTitle] = useState("")
  const [country, setCountry] = useState("")
  const [release, setRelease] = useState(1900)
  const [rating, setRating] = useState("")
  const [duration, setDuration] = useState("")
  const [listedIn, setListedIn] = useState("")
  const [discription, setDiscription] = useState("")

  function handleSubmit(event) {
    event.preventDefault();

    const newShowObj = {

      id: crypto.randomUUID(),
      type: "TV Show",
      dateAdded: "",

      title: title,
      country: country,
      releaseYear: release,
      rating: rating,
      duration: duration,
      listedIn: listedIn,
      discription: discription,

    }
  

    //POST : (C)RUD :: Create
    
    const options = {
      method: "POST", 
      body: JSON.stringify(newShowObj),
      headers: {
        Accept: "application.json",
        'Content-Type': 'application/json'
      }
    }

    // const configObj = { 

    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify(newShowObj),
    // }

    fetch("http://localhost:5001/api/shows", options)
    .then(r => r.json())
    .then(console.log)
    .catch(err => console.log(err))


    setTitle("")
    setCountry("")
    setRelease(1900)
    setRating("")
    setDuration("")
    setListedIn("")
    setDiscription("")
    console.log(newShowObj)

  }

  return (

    <div className="form-styles">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            value={title}
            name="title"
            onChange={(se) => { setTitle(se.target.value) }}
          />
        </label>
        {" "}
        <br />
        <label htmlFor="country">
          Country
          <input
            type="text"
            value={country}
            name="country"
            onChange={(se) => { setCountry(se.target.value) }}
          />
        </label>
        {" "}
        <br />
        <label htmlFor="releaseYear">
          Release Year
          <input
            type="number"
            value={release}
            name="releaseYear"
            onChange={(se) => { setRelease(se.target.value) }}
          />
        </label>
        {" "}
        <br />
        <label htmlFor="rating">
          Rating
          <input
            type="text"
            value={rating}
            name="rating"
            onChange={(se) => { setRating(se.target.value) }}
          />
        </label>
        {" "}
        <br />
        <label htmlFor="duration">
          Duration
          <input
            type="text"
            value={duration}
            name="duration"
            onChange={(se) => { setDuration(se.target.value) }}
          />
        </label>
        {" "}
        <br />
        <label htmlFor="listedIn">
          Listed In
          <input
            type="text"
            value={listedIn}
            name="listedIn"
            onChange={(se) => { setListedIn(se.target.value) }}
          />
        </label>
        {" "}
        <br />
        <label htmlFor="discription">
          Discription
          <input
            type="text"
            value={discription}
            name="discription"
            onChange={(se) => { setDiscription(se.target.value) }}
          />
        </label>
        {" "}
        <br />
        <button type="submit">submit</button>
      </form>
      {" "}
    </div>
  )





}



export default ShowsNewForm;

/*
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