import { NavLink  } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react";

function Header() {
  const {user,setUser} = useContext(UserContext)
  
    return(<>
    <h1 className='header'>Saeid's News</h1>
    <h2>You are logged in as : {user}</h2>
    <div className="flex-container">
    <NavLink exact='true' to ='/' className={({isActive}) => isActive ? "active-icon": null } ><img alt='thinking man' className= 'logo' src="https://cdn.britannica.com/53/180553-050-FE609C89/Thinker-Auguste-Rodin-Museum-Paris-1904.jpg"/> </NavLink>
  <NavLink exact='true' to='/articles' className={({isActive}) => isActive ? "active": "NavLink" } ><i className="fa fa-newspaper-o"></i> Articles</NavLink>
  <NavLink exact='true' to= '/topics'className={({isActive}) => isActive ? "active": "NavLink" } ><i className="fa fa-pencil"></i>Topics</NavLink>
  <NavLink exact='true' to= '/login'className={({isActive}) => isActive ? "active": "NavLink" } ><MdAccountCircle />Login</NavLink>

  <div className = 'NavLink'></div>
</div>
    </>)
}

export default Header