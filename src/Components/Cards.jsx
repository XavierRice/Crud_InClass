import DetailsCard from "./DetailsCard.jsx";


const Cards = ({ product, allShows, setAllShows }) => {

    const [toggleEdit, setToggleEdit] = useState(false)

    const [formObj, setFormObj] = useState({ title: "", country: "", dateAdded: "", releaseYear: null, rating: "", duration: "", listedIn: "", description: "" })



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

    function handleEdit() {





    }







    return !toggleEdit ? (

        <div key={product.id}>
            <h4>{product.title}</h4>
            <button onClick={(se) => handleDelete(product)}>X</button>
            <button onClick={(se) => setToggleEdit(!toggleEdit)} >{toggleEdit? "close":"Edit⚡️"}</button>
            <DetailsCard product={product} />
        </div>)
    
    :
    
    (<form className="edit-form">
            <label>
                <input
                type="text"
                onChange={(se)=>se.target.value}
                />
            <button onClick={(se) => handleEdit(product)}>⭐️</button>
                <button onClick={(se) => setToggleEdit(!toggleEdit)} >close edit</button>
            </label>
        </form>)



}







export default Cards; 