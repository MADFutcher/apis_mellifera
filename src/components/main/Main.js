import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            loggedInUser: this.props.user,
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
