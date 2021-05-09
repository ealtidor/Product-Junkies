import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faHeart} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  

  return (
    <nav className="navbar">
      <Link className="header" to="/">Product Junkies</Link>
      <input
        onClick="enter"
        className="search"
        type="text"
        name="searchProduct"
        id="search-product"
        placeholder="SEARCH JUNK DRAW" />
      <Link className="plus-sign" to="/favorites"><FontAwesomeIcon icon={ faHeart} size="2x"/></Link>
      <Link className="plus-sign" to="/new"><FontAwesomeIcon icon={ faPlus} size="2x"/></Link>
    </nav>
  )
}

export default Nav