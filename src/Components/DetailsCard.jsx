import { useState } from "react"


export default function DetailsCard({product}){

const [showDetails, setShowDetails] = useState(false)

return(
     
      <div className="SmBox" key={product.id}>
        <h6 onClick={()=>{setShowDetails(!showDetails)}}>show More</h6>
       { showDetails && ( <div className="hidden" >
        <p>{product.description}</p>
        <h5>{product.listedIn}</h5>
        <h5>{product.dateAdded}</h5>
        <h5>{product.duration}</h5>
       </div>
       )}
        <h5>{product.rating}</h5> 
      </div>
     
)

}
/*
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
  }
*/