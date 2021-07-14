import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <nav className="navbar">
      <Link className="header" to="/">
        Product JunkEz
      </Link>
      <input
        className="search"  
        type="text"
        value={props.findPost}
        onChange={(e) => props.setFindPost(e.target.value)}
        name="searchProduct"
        id="search-product"
        placeholder="SEARCH BY BRAND"
      />
      <Link className="plus-sign" to="/favorites">
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </Link>
      <Link className="plus-sign" to="/new">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </Link>
    </nav>
  );
}

export default Nav;
