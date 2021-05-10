import axios from "axios";
import { baseURL, config } from "../services";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";

function Home(props) {
  const deletePost = async (postID) => {
    const specificURL = `${baseURL}/${postID}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { posts } = props;
  console.log(posts);
  return (
    <div>
      <ImageSlider />
      <h3 className="sub-header"> Today's Pick</h3>
      <main>
        <aside>
          <Link className="aside-junk" to="/new">
            + POST YOUR JUNK
          </Link>
          <Link className="aside-filter" to="/filter">
            FILTERS
          </Link>
          <label className="aside-cat" htmlFor="category">
            SHOP BY CATEGORY
          </label>
          <select value="">
            {posts.map((post) => {
              return (
                <option value={post.fields.category}>
                  {post.fields.category}
                </option>
              );
            })}
          </select>
        </aside>
        <span
          style={{
            display: "inline-block",
            width: "1px",
            height: "100%",
            background: " rgb(42, 134, 120)",
            margin: "0 2px",
          }}
        ></span>
        <section>
          {posts.map((post) => {
            const {
              avatarImg,
              username,
              createdTime,
              productImg,
              brand,
              productName,
              quantityLeft,
            } = post.fields;
            return (
              <div key={post.id} className="post-container">
                <img src={avatarImg} alt="avatar" />
                <p>{username}</p>
                <p>{createdTime}</p>
                <img src={productImg} alt="products" />
                <p>{brand}</p>
                <p>{productName}</p>
                <p>{quantityLeft}</p>
                <button onClick={() => deletePost(post.id)}>REMOVE JUNK</button>
              </div>
            );
          })}
          ;
        </section>
      </main>
    </div>
  );
}

export default Home;