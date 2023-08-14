import DetailsCard from "./DetailsCard.jsx";


const Cards = ({product, allShows, setAllShows}) => {

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







    return (

        <div key={product.id}>
            <h4>{product.title}</h4>
            <button onClick={(se) => handleDelete(product)}>X</button>
            <button onClick={(se) => handleEdit(product)}>⭐️</button>
            <DetailsCard product={product} />
        </div>

    )

}







export default Cards; 