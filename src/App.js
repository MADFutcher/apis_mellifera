import './colour.css'
import './App.css'
import React, { Component } from 'react'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from 'react-router-dom'
import Profile from './components/profile/Profile'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedInUser:null
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  render(){
    return (
      <div className="App">
          <Switch>
              <Route exact path='/'>
                {
                    !this.state.loggedInUser ? 
                      <div className='App-header'>
                        <h1 className='text-indigo display-1'>MELLIFERA &#178;</h1>
                        <div>
                          <Login />
                          <Link to='/signup'>
                            Signup
                          </Link>
                        </div>
                      </div>
                      : <Profile />
                }
              </Route>
              <Route exact path='/signup'>
                <div className='App-header'>
                  <h1 className='text-indigo display-1'>MELLIFERA &#178;</h1>
                  <div>
                    <Signup />
                    <Link to='/'>
                      Login
                    </Link>
                  </div>
                </div>
              </Route>
              <Route exact='/profile'>
                  <Profile />
              </Route>
          </Switch>
      </div>
    );
  }
}


