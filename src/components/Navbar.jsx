import { NavLink } from "react-router-dom";
import '../assets/navbar.css';


function Navbar() {
    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inactive')
    return(
        <div className='container-fluid'>
            <nav className="navbar container" >
            
                <div>
                    <NavLink className={setActiveClass} to='/'>HOME</NavLink>
                    <NavLink className={setActiveClass} to='/pokemones'>Pokemones</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
