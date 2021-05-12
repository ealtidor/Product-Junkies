import Nav from "./components/Nav";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";
import Favorites from "./components/Favorites";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";

// Get Request
function App() {
  const [findPost, setFindPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [postFavorites, setPostFavorites] = useState([]);

  const addToFavorites = (post) => {
    const favList = [...postFavorites, post];
    setPostFavorites(favList)
  }


  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
    };
    fetchPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav setFindPost={setFindPost} findPost={findPost} />

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
      <Route path="/filter" component={Filter} />
    </div>
  );
}

export default App;
