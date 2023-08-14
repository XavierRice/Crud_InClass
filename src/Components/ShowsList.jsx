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

    function handleDelete(showToDelete){

     console.log("be gone", showToDelete.id)
     
     const filteredResults = allShows.filter((eachShow) => {
        if(eachShow.id !== showToDelete.id){
            return true
        }});

        setAllShows([...filteredResults])


    fetch(`http://localhost:5001/api/shows/${showToDelete.id}`, { method: "DELETE"})
    .then(r => r.json())
    .then(console.log)

    }

    function handleEdit(){

    }



    const showsToRender = allShows.map((eachShow) =>
        <div key={eachShow.id}>
            <h4>{eachShow.title}</h4>
            <button onClick={(se)=>handleDelete(eachShow)}>X</button>
            <button onClick={(se) => handleEdit(eachShow)}>⭐️</button>
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