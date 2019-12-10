import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
