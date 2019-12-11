import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import Shop from  './pages/shoppage/shoppage.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Shop/>
    </div>
  );
}

export default App;
