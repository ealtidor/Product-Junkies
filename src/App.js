import { useEffect} from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import './App.css';

// Get Request
function App() {
  // const [posts, setPosts] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
    }
    fetchPosts();
  }, [])


  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
