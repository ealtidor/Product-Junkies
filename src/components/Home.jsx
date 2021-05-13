import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";
import { baseURL, config } from "../services";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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

  const searchBar = posts.filter((post) =>
    post.fields.productName.toLowerCase().includes(props.findPost.toLowerCase())
  );

  const sortedList = props.findPost ? searchBar : filteredPosts;
  return (
    <div>
      <ImageSlider />
      <h3 className="sub-header"> Today's Pick</h3>

      <main>
        <aside>
          <div className="aside-junk">
            <Link className="aside-junk" to="/new">
              + POST YOUR JUNK
            </Link>
          </div>
          <div className="aside-filter">
            <Link className="aside-filter" to="/filter">
              FILTERS
            </Link>
          </div>

          <div className="aside-cat">
            <select
              className="aside-selectcat"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="dropdown-header" disabled={category} selected>
                SHOP BY CATEGORY
              </option>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
            <button
              className="reset"
              type="button"
              onClick={() => setCategory("")}
            >
              Reset
            </button>
          </div>
        </aside>
        <span></span>
        <section className="home-container">
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

            // Progress Bar
            const now = Number(quantityLeft);
            const progressInstance = (
              <ProgressBar now={now} label={`${now}%`} />
            );

            return (
              <div key={post.id} className="post-container">
                <img className="home-avatar" src={avatarImg} alt="avatar" />
                <p className="home-username">{username}</p>
                <p className="home-time">{createdTime}</p>
                <img
                  className="home-products"
                  src={productImg}
                  alt="products"
                />
                <p className="home-brand">{brand}</p>
                <p className="home-prodname">{productName}</p>
                <p>What's Left:</p>
                <p className="home-quantity">{progressInstance}</p>
                <button
                  className="home-trash"
                  onClick={() => deletePost(post.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} size="2x" />
                </button>
                <button
                  onClick={() => props.addToFavorites(post)}
                  className="home-favorites"
                >
                  {props.postFavorites &&
                  !props.postFavorites.find((f) => f.id === post.id) ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="2x"
                      style={{ color: "rgb(42, 134, 120)" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="2x"
                      style={{ color: "red" }}
                    />
                  )}
                </button>
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
