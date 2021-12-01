import React from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/authpage/authpage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from "./redux/user/user-actions";


class  App  extends React.Component {
  // property to close auth state when user logs off
  unsubscribeFromAuth = null;


  componentDidMount(){
    // a var/prop to hold and set a user state in redux
    const {setCurrentUser} = this.props;

    // check user state from google auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // get userdata & set it to our appstate
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      // set state to null that we get from userAuth if user data does not exist
      setCurrentUser(userAuth)
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
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route
                exact
                path='/auth'
                render={()  => this.props.currentUser
                    ? (<Redirect to='/' />)
                    : (<AuthPage />)
                }
            />
          </Switch>
          </Router>  
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  // trigger and set user state with user action from redux
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
