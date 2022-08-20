import { NavLink } from 'react-router-dom'
import '../assets/css/Nav.css';

function Nav() {
  return (
    <div id="nav">
        <div id="titleContainer">
            <NavLink id="NavLink" to="/">
                <h1 id="title">Pokédex</h1>
            </NavLink>
        </div>
    </div>
  )
}

export default Nav