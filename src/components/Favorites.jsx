import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Favorites = (props) => {
  return (
    <div>
      <h3 className="fav-subheader">YOUR FAVORITES</h3>
      {/* Loop through the post to grab the fields */}
      <section className="home-container">
        {props.postFavorites.map((post) => {
          const {
            avatarImg,
            username,
            createdTime,
            productImg,
            brand,
            productName,
            quantityLeft,
          } = post.fields;
          // Progress Bar Functionality
          const now = Number(quantityLeft);
          const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
          return (
            <div key={`${post.id}`} className="post-container">
              <img className="home-avatar" src={avatarImg} alt="avatar" />
              <p className="home-username">{username}</p>
              <p className="home-time">{createdTime}</p>
              <img className="home-products" src={productImg} alt="products" />
              <p className="home-brand">{brand}</p>
              <p className="home-prodname">{productName}</p>
              <p>What's Left:</p>
              <p className="home-quantity">{progressInstance}</p>
              <button className="home-trash">
                <FontAwesomeIcon icon={faTrashAlt} size="2x" />
              </button>
            </div>
          );
        })}
        ;
      </section>
    </div>
  );
};

export default Favorites;
