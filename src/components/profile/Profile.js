import React, { Component } from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button'
import AuthService from '../auth-service/AuthService'
import NavBar from '../navbar/NavBar'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    } 
    
    service = new AuthService()

    logout = (e) =>{
        this.service.logout()
        this.props.logoutUser(null)
        this.props.history.push('/')
    };


    render() {
        return (
            <React.Fragment>
                <NavBar logUserOut={this.logout} user={this.props.user}/>
                <div className='container-fluid profile-container'>
                    <h1 className="display-4"></h1>
                </div>
            </React.Fragment>
        )
    }
}
