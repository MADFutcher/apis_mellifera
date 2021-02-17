import React, { Component } from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button'
import AuthService from '../services/AuthService'
import NavBar from '../navbar/NavBar'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
    constructor(props){
        super(props)
    }

    service = new AuthService()

    logout = (e) =>{
        this.service.logout().then(()=>{
            localStorage.clear()
            this.props.history.push('/')
        }, err=>{console.log(err)})
    };

    render() {   
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
