import { useState } from "react";
import DetailsCard from "./DetailsCard.jsx";
import "./ShowsList.css"

const Cards = ({ product, allShows, setAllShows }) => {

    const [toggleEdit, setToggleEdit] = useState(false)

   // const [formObj, setFormObj] = useState({ title: "", country: "", dateAdded: "", releaseYear: null, rating: "", duration: "", listedIn: "", description: "" })

    const [select, setSelect] = useState("title")
    const [change, setChange] = useState("")

    function handleDelete(showToDelete) {

        console.log("be gone", showToDelete.id)

        const filteredResults = allShows.filter((eachShow) => {
            if (eachShow.id !== showToDelete.id) {
                return true
            }
        })
        setAllShows([...filteredResults])

        fetch(`http://localhost:5001/api/shows/${showToDelete.id}`, { method: "DELETE" })
            .then(r => r.json())
            .then(console.log)

    }

    function handleSelect(e){
     setSelect(e.target.value)
    }

    function handleEdit(e) {
        e.preventDefault()
        const changedObj = {
            [select]:change
        };

        const updateShow = {...product, ...changedObj}
        console.log(updateShow)
         fetch(`http://localhost:5001/api/shows/${product.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body:JSON.stringify(updateShow) })
         .then(r => r.json())
         .then(console.log)

     }


    return toggleEdit ? (
        <div key={product.id}>
            <h4>{product.title}</h4>
            <form className="edit-form" onSubmit={se => handleEdit(se) }>
                <label htmlFor="entry1">Choose a Key:
                    <select name="entry1" id="entry1" onChange={handleSelect}>
                      <option value="title" >Title</option>
                      <option value="country">Country</option>
                      <option value="dateAdded">Date Added</option>
                      <option value="releaseYear">Year Released?</option>
                      <option value="rating">rating</option>
                      <option value="duration">duration</option>
                      <option value="listdIn">Listed-In</option>
                      <option value="description">Description</option>
                      </select>
                    <input
                        type="text"
                        value={change}
                        onChange={(se) => setChange(se.target.value)}
                        id="value"
                    />  
                    <button type="submit" >⭐️</button>
                    <button onClick={(se) => setToggleEdit(!toggleEdit)} >close edit</button>
                </label>
            </form>
        </div>

    ) : (

        <div key={product.id} className="show-card-styles">
            <h4>{product.title}</h4>
            <button onClick={(se) => handleDelete(product)}>X</button>
            <button onClick={(se) => setToggleEdit(!toggleEdit)} >{toggleEdit ? "close" : "Edit⚡️"}</button>
            <DetailsCard product={product} />
        </div>

    )




}







export default Cards; 