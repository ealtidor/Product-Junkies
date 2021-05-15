import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <nav className="navbar">
      <Link className="header" to="/">
        Product JunkEz
      </Link>
      <>
  <Navbar bg="light">
    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Navbar.Brand>Brand text</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
</>
      <input
        className="search"
        type="text"
        value={props.findPost}
        onChange={(e) => props.setFindPost(e.target.value)}
        name="searchProduct"
        id="search-product"
        placeholder="SEARCH JUNK DRAWER"
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
