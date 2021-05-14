import Nav from "./components/Nav";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";
import Favorites from "./components/Favorites";
import { useState, useEffect } from "react";

// Get Request
function App() {
  const [findPost, setFindPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [postFavorites, setPostFavorites] = useState([]);

  // Favorites function

  const addToFavorites = (post) => {
    const hasBeenLiked = postFavorites.find((f) => f.id === post.id);
    let favList;
    if (!hasBeenLiked) {
      favList = [...postFavorites, post];
    } else {
      favList = postFavorites.filter((f) => f.id !== post.id)
    }
    setPostFavorites(favList);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
    };
    fetchPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav setFindPost={setFindPost} findPost={findPost} postFavorites={postFavorites} />

      <hr />
      <Route path="/favorites">
        <Favorites postFavorites={postFavorites} />
      </Route>
      <Route exact path="/">
        <Home
          posts={posts}
          findPost={findPost}
          setToggleFetch={setToggleFetch}
          addToFavorites={addToFavorites}
          postFavorites={postFavorites}
        />
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
