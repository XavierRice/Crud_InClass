import { useState } from "react";


const NewProduct = () => {

const [form, setForm] = useState({})
const [id, setId] = useState("")
const [title, setTitle] = useState("")
const [type, setType] = useState("")

function handleId(event){
setId(event.target.value)    
}

function handleTitle(event){
setTitle(event.target.value)
}

function handleType(event){
setType(event.target.value)
}

function handleSubmit(event){
    event.preventDefault();
}

return (

  <div>
    <form onSubmit={handleSubmit}>
    <label htmlFor="id">
    Id:
     <input 
     type="text" 
     name="id"
     onChange={handleId}
     />
     </label>
     <label htmlFor="type">
    Type:
     <input 
     type="text" 
     name="type"
     onChange={handleType}
     />
     </label>
     <label htmlFor="title">
    Title:
     <input 
     type="text" 
     name="title"
     onChange={handleTitle}
     />
     </label>
    </form>
  </div>



)


}



export default NewProduct;
/*
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

*/