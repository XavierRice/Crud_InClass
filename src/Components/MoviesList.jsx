import { useState, useEffect } from "react"
import DetailsCard from "./DetailsCard"

const MoviesList = () => {

    const [newMovies, setNewMovies] = useState([])
    const [allMovies, setAllMovies] = useState([])
    console.log(allMovies)

    useEffect(() => {
        fetch("http://localhost:5001/api/movies")
            .then(response => response.json())
            .then(setAllMovies)
    }, []);

    const moviesToRender = allMovies.map(movie =>

        <div key={movie.id}>
            <h4>{movie.title}</h4>
            <DetailsCard product={movie}/>
        </div>
    );


    const newMoviesToRender = allMovies.filter(movie => !(movie.releaseYear > 2001)).map(movie =>
        
        <div key={movie.id}>
        <h4>{movie.title}</h4>
        <h5>{movie.dateAdded}</h5>
        <DetailsCard product={movie}/>
        </div>
        )

        
    console.log(newMoviesToRender)
    

    return (

        <div>
           {moviesToRender}
        </div>
    )





}

export default MoviesList;