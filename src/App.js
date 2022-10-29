import './App.css';
import Authorization from './components/Authorization';
import React, { useState } from 'react';

function App() {

  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Authorization />
      {/* {count} */}
      {/* <button onClick={() => {
        setCount(count + 1)
      }}>+</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>-</button> */}
    </div>
  );
}

export default App;
