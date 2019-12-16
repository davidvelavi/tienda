import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import Shop from  './pages/shoppage/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signIn" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
