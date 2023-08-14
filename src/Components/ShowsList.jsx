import { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";

const ShowsList = () => {

    const [allShows, setAllShows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/shows")
            .then(response => response.json())
            .then(arr => setAllShows(arr))
            .catch(err => console.log(err))
    }, [])

    

    const showsToRender = allShows.map((eachShow) =>
        <div>
            <h4>{eachShow.title}</h4>
            <DetailsCard product={eachShow}/>
        </div>

    )

    const newShowsToRender = allShows.filter(show => !(show.releaseYear > 2001)).map(show =>
        
        <div key={show.id}>
        <h4>{show.title}</h4>
        <h5>{show.dateAdded}</h5>
        <DetailsCard product={show}/>
        </div>
        )


    return (
        <div>
            <h1>From for New Show</h1>
            {showsToRender}
        </div>
    )

}


export default ShowsList;