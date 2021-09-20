import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/authpage/authpage.component';
import { auth } from './firebase/firebase.utils';


class  App  extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  // property to close auth state when user logs off
  unsubscribeFromAuth = null;



  componentDidMount(){

    // open state from google auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  } 


  componentWillUnmount(){

    // close user authenticated state to prevent memory leaks
    this.unsubscribeFromAuth();
  }



  render(){
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/auth' component={AuthPage} />
          </Switch>
          </Router>  
      </div>
    );
  }
}

export default App;
