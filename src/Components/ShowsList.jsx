import { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";
import "./ShowsList.css"


const ShowsList = () => {

    const [allShows, setAllShows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/shows")
            .then(response => response.json())
            .then(arr => setAllShows(arr))
            .catch(err => console.log(err))
    }, [])

    

    const showsToRender = allShows.sort().map((eachShow) =>
        <div key={eachShow.id}>
            <h4>{eachShow.title}</h4>
            <DetailsCard product={eachShow}/>
        </div>

    )

    const newShowsToRender = allShows.filter(show => !(show.releaseYear > 2001)).map(show =>
        
        <div key={show.id} className="show-cards-styles" >
        <h4>{show.title}</h4>
        <h5>{show.dateAdded}</h5>
        <DetailsCard product={show}/>
        </div>
        )


    return (
        <div className="shows-list-styles">
            <h1> Show</h1>
            <div className="display-show-cards">
            {showsToRender}
            </div>
        </div>
    )

}


export default ShowsList;