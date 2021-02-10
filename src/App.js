import './colour.css'
import './App.css'
import React, { Component } from 'react'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedin: false
    }
  }


  render(){
    return (
      <div className="App">
        <div className='App-header'>
          <h1 className='text-indigo display-1'>MELLIFERA &#178;</h1>
          <div>
            <Login />
            <Link to="/signup">
                Signup
            </Link>
            <Switch>
                <Route path='/signup'>
                  <Signup />
                </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


