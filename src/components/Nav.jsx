import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"

function Nav(props) {
  // some state to store the seatrch term
  const [findPost, setFindPost] = useState("")
  const matchPost = props.posts.filter((post) =>
  post.fields.category.toLowerCase().includes(findPost.toLocaleLowerCase()))
console.log(matchPost)
  // filter through posts from props to find any .fields.category

  return (
    <nav className="navbar">
      <Link className="header" to="/">Product JunkEz</Link>
      
      <div classname="typehead-container">
      <input
        onClick="enter"
        className="search"
          type="text"
          value={findPost}
          onChange= {(e) => setFindPost(e.target.value)}
        name="searchProduct"
        id="search-product"
          placeholder="SEARCH JUNK DRAWER" />
        
        {findPost && (
          <div className="results-container">
            {matchPost.map((post) => (
          <p>{post.fields.category}</p>
            ))}
          </div>
        )
        }
      </div>
      
     
      <Link className="plus-sign" to="/favorites"><FontAwesomeIcon icon={ faHeart} size="2x"/></Link>
      <Link className="plus-sign" to="/new"><FontAwesomeIcon icon={ faPlus} size="2x"/></Link>
    </nav>
  )
}

export default Nav