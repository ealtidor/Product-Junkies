import axios from 'axios'
import { baseURL, config } from "../services";

function Home(props) {
  const deletePost = async () => {
    const specificURL = `${baseURL}/${props.post.id}`
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  }


  const { avatarImg, username, createdTime, productImg, brand,
    productName, quantityLeft } = props.post.fields
  
  return ( 
    <div key={props.post.id}
      className="post-container">
      <img src={avatarImg} />
      <p>{username}</p>
      <p>{createdTime}</p>
      <img src={productImg} />
      <p>{brand}</p>
      <p>{productName}</p>
      <p>{quantityLeft}</p>
      <button onClick={deletePost}>DELETE</button>
      </div>
    
  )
}

export default Home