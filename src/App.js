import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/containers/Home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
