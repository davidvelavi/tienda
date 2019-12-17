import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import Shop from  './pages/shoppage/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from  '../src/firebase/firebase.utilis';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
   this.unSubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        } );
      }else{
        this.setState({
          currentUser: userAuth
        });
      }
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
 render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signIn" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
 }
}

export default App;
