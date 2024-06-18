import './App.css';
import React from 'react';
import Library from './3주차/Library';
import Clock from './4주차/Clock';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Clock></Clock>
      </React.StrictMode>
    </div>
  );
}

export default App;
