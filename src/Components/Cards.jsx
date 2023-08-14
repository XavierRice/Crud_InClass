import DetailsCard from "./DetailsCard.jsx";


const Cards = () => {

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