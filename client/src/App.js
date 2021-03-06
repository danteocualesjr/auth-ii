import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Signin from './auth/Signin.js';
import Users from './users/Users.js';
import Signup from './auth/Signup.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Y Combinator</h1>
        
        <div>
          {localStorage.getItem('jwt') && (
            <button onClick={this.signout}>Sign Out</button>
          )}
        </div>
        
        </header>
        <br/><br/>
        <Route path="/signin" component={Signin} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }

  signout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');

      this.props.history.push('/signin');
    }
  };
}

export default withRouter(App);