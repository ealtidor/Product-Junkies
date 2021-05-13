import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const Favorites = (props) => {
  
  return (
    <div>
      <h3>FAVORITES COMING SOON</h3>
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
                <p className="home-quantity">{quantityLeft}</p>
                <button
                  className="home-trash"
                  // onClick={() => deletePost(post.id)}
                >
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