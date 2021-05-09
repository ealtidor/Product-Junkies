import Nav from "./components/Nav"
import Form from "./components/Form"
import { Route, Link } from "react-router-dom"
import Home from "./components/Home"
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import './App.css';

// Get Request
function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
    }
    fetchPosts();
  }, [toggleFetch])


  return (
    <div className="App">
      <Nav />
      <Link to ="/new">Post Your Junk</Link>
      <Route exact path="/">
        <main>
        <h3> Today's Pick</h3>
        {posts.map((post) => (
        <Home post={post} setToggleFetch={setToggleFetch}/>
        ))};
        </main>
        
      </Route>
      <Route path="/new">
        <Form  setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
