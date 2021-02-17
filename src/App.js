import './colour.css'
import './App.css'
import React, { Component } from 'react'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import Profile from './components/profile/Profile'
import ProtectedRoute from './components/auth/protectedRoutes'
import AuthService from './components/services/AuthService'
import Hives from './components/hives/Hives'
import Cookies from 'js-cookie'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn: localStorage.sid ? true : false,
      user: localStorage.userData ? JSON.parse(localStorage.userData) : null
    }
  }


  updateUserData = (userData) =>{
    localStorage.setItem("userData", JSON.stringify(userData))
    this.setState({user: JSON.parse(localStorage.userData)})
  }

  render(){
    return(
      <div className="App">
        <Switch>
          <ProtectedRoute 
            exact
            id={localStorage.sid}
            path='/' 
            isLoggedIn={localStorage.sid ? true : false}
            userData={localStorage.userData ? JSON.parse(localStorage.userData) : null}
            component={Profile}
          />
          <ProtectedRoute 
            exact
            id={localStorage.sid}
            path='/hives' 
            isLoggedIn={localStorage.sid ? true : false}
            userData={localStorage.userData ? JSON.parse(localStorage.userData) : null}
            refreshUserData={this.updateUserData}
            component={Hives}
          />
          <Route exact path='/login' render={(props) => <Login  {...props} /> }/>
        </Switch>
       
    </div>
    )
  }  
}  
export default withRouter(App)

