import React, { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="container">
      <h1 className="heading">React Counter App</h1>
      <div className="counter-box">
        <h2 className="counter">{count}</h2>
      </div>
      <div className="button-group">
        <button onClick={increment} className="button inc-button">Increase</button>
        <button onClick={decrement} className="button dec-button">Decrease</button>
        <button onClick={reset} className="button reset-button">Reset</button>
      </div>
    </div>
  );
}

export default App;
