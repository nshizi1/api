import  { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h4>{item.email}</h4>
          <p>{item.body}</p>
          {/* <img src={item.url} alt="" /> */}
        </div>
      ))}
    </div>
  );
}

export default MyComponent;