import './colour.css'
import './App.css'
import React, { Component } from 'react'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import Profile from './components/profile/Profile'
import protectedRoute from './components/auth/protectedRoutes'
import AuthService from './components/services/AuthService'
import Hives from './components/hives/Hives'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedInUser:null
    }
  }

  service = new AuthService()
  

  fetchUser(){
    if(this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        console.log(err)
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  render(){
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
          <div className="App">
            <Switch>
              <Route exact path='/' render={(props)=><Profile user={this.state.loggedInUser} logoutUser={this.getTheUser} {...props}/>} />
              <Route exact path='/profile' render={(props)=><Profile user={this.state.loggedInUser} logoutUser={this.getTheUser} {...props}/>} />
              <Route exact path='/hives' render={(props)=><Hives user={this.state.loggedInUser} logoutUser={this.getTheUser} {...props}/>} />
            </Switch>
          </div>
      )
    }else{
      return (
        <div className="App">
            <Switch>
                <Route exact path='/' render={()=><Login getUser={this.getTheUser}/> } />
                <Route exact path='/signup' render={()=> <Signup getUser={this.getTheUser} {...this.props}/>} />
            </Switch>
        </div>
      );
    }
  }
}
export default withRouter(App)

