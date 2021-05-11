import axios from "axios";
import { baseURL, config } from "../services";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home(props) {
  const [category, setCategory] = useState("");

  const deletePost = async (postID) => {
    const specificURL = `${baseURL}/${postID}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { posts } = props;
  const categories = posts.reduce((acc, post) => {
    if (!acc.includes(post.fields.category)) {
      acc.push(post.fields.category);
    }
    return acc;
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.fields.category.includes(category)
  );

  const searchBar =  posts.filter((post) =>
  post.fields.productName.toLowerCase().includes(props.findPost.toLowerCase())
);
  console.log("find", searchBar)
  console.log("find", props.findPost.toLowerCase())

  const sortedList=props.findPost ? searchBar : filteredPosts
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled={category} selected>
              ---
            </option>
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
          <button type="button" onClick={() => setCategory("")}>
            Reset
          </button>
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
          {sortedList.map((post) => {
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
