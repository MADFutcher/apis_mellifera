import React, { Component } from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button'
import AuthService from '../services/AuthService'
import NavBar from '../navbar/NavBar'
import { Link } from 'react-router-dom'

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
        console.log(this.props.user)
        return (
            <React.Fragment>
                <NavBar logUserOut={this.logout} user={this.props.user}/>
                <div className='container-fluid profile-container'>
                    <Link to='/hives'>
                        Hives
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
