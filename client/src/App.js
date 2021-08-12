import './App.css';
import { useState, useEffect } from 'react';

const url = (path) => {
  return process.env.NODE_ENV === "development" ? `http://localhost/5000${path}` : path
}

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch(url("/api/"))
    .then(res => res.json())
    .then(apiData => setData(apiData))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Api Data Returned: {data}</p>
      </header>
    </div>
  );
};

export default App;
