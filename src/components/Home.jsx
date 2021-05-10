import axios from 'axios'
import { baseURL, config } from "../services";
import ImageSlider from "./ImageSlider";
import {Link} from "react-router-dom"


function Home(props) {
  const deletePost = async (postID) => {
    const specificURL = `${baseURL}/${postID}`
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  }


  
    const {posts} = props
  
  return (
    <div>
      <ImageSlider />
      <main>
        <aside>
          <Link to="/new">+ POST YOUR JUNK</Link>
          <Link to="/filter">FILTERS</Link>
        </aside>
        <h3> Today's Pick</h3>
        <section>
        {posts.map((post) => {  
          const { avatarImg, username, createdTime, productImg, brand,
            productName, quantityLeft } = post.fields
          return (
            <div key={post.id}
            className="post-container">
            <img src={avatarImg} />
            <p>{username}</p>
            <p>{createdTime}</p>
            <img src={productImg} />
            <p>{brand}</p>
            <p>{productName}</p>
            <p>{quantityLeft}</p>
            <button onClick={() => deletePost(post.id)}>REMOVE JUNK</button>
            </div>
        )})};
        </section>
        </main>
    </div>
    
  )
}

export default Home