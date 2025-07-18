import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="React Logo" />
        <h1 className="title">React Refresh Counter</h1>
        <p className="description">
          You have refreshed <span className="count">{count}</span> times.
        </p>
        <button className="refresh-button" onClick={() => setCount(count + 1)}>
          🔁 Refresh
        </button>
      </header>
    </div>
  );
}

export default App;
