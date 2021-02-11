import React, { Component } from 'react'
import './Profile.css'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className='container-fluid profile-container'>
                <h1 className="display-1">WELCOME</h1>
            </div>
        )
    }
}
