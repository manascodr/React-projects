import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // https://jsonplaceholder.typicode.com/posts
  const [apidata, setapidata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setapidata(response.data);
      console.log(response);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  

  const rendercard =  apidata.map((data)=>(
    <div className="card" key={data.userId}>
      <p>{data.userId}</p>    
      <p>{data.that}</p>    
      <p>{data.title}</p>   
      <p>{data.body}</p>
    </div>
  ))
  

  return (
  <>
  <div>
    {rendercard}
  </div>
  </>
  );
}

export default App;
