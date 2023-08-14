import {Link} from "react-router-dom"

const NavBar = () => {

 return (
       <div>
        <Link to={'/'}>
           <h3>Home</h3> 
        </Link>
        {" "}
        <Link to={'/shows'}>
           <h3>All Shows</h3>
        </Link>
        {" "}
        <Link to={'/movies'}>
           <h3>All Movies</h3>  
        </Link>

       </div>
 )

}

export default NavBar;