import Nav from "./components/Nav"
import Form from "./components/Form"
import { Route} from "react-router-dom"
import Home from "./components/Home"
import axios from "axios";
import { baseURL, config } from "./services";
import './App.css';
import Favorites from "./components/Favorites";
import Filter from "./components/Filter"
import { useState, useEffect } from "react";


// Get Request
function App() {
  const [findPost, setFindPost] = useState("")
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
console.log(findPost)

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
    };
    fetchPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav  />
      <hr />
      <Route path="/favorites">
        <Favorites/>
      </Route>
      <Route exact path="/">
      <Home posts={posts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch}  />
      </Route>
      <Route path="/filter" component={Filter}/>
    </div>
  );
}

export default App;
