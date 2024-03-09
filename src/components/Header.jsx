import { NavLink  } from "react-router-dom";


function Header() {
    return(<>
    <h1 className='header'>Saeid's News</h1>
    <div className="flex-container">
    <NavLink exact='true' to ='/' className={({isActive}) => isActive ? "active-icon": null } ><img alt='thinking man' className= 'logo' src="https://cdn.britannica.com/53/180553-050-FE609C89/Thinker-Auguste-Rodin-Museum-Paris-1904.jpg"/> </NavLink>
  <NavLink exact='true' to='/articles' className={({isActive}) => isActive ? "active": "NavLink" } >Articles</NavLink>
  <NavLink exact='true' to= '/topics'className={({isActive}) => isActive ? "active": "NavLink" } >Topics</NavLink>
  <div className = 'NavLink'></div>
</div>
    </>)
}

export default Header