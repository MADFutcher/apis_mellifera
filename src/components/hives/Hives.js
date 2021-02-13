import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Map from '../gmap/Gmap'
import AuthService from '../services/AuthService'
import HiveService from '../services/HiveServices'
import UpdateHive from './UpdateHive'
import NavBar from '../navbar/NavBar'
import './Hives.css'

export default class Hives extends Component {
    constructor(props){
        super(props)
        this.state={
            user: this.props.user,
            hiveClicked: null
        }
    }

    AuthService = new AuthService()
    HiveService = new HiveService()


    logout = (e) =>{
        this.AuthService.logout()
        this.props.logoutUser(null)
        this.props.history.push('/')
    };

    handleClickedHive = (hive) =>{
        const hiveId = hive
        this.HiveService
            .getHive(hiveId)          
            .then(hive => this.setState({hiveClicked: hive}), err => console.log(err))


    }

    render() {
        return (
            <React.Fragment>
                <NavBar logUserOut={this.logout} user={this.state.user}/>
                <div className='container-fluid hive-container text-left'>
                    <h1 className="display-4 mt-5 mx-auto">Your Hives</h1>
                    <Row>
                        <Col xs={12} md={6} >
                            <Map hives={this.state.user.hives} clickedHive={this.handleClickedHive}/>
                        </Col>
                        <Col xs={12} md={6} >
                            {!this.state.hiveClicked ? <h1>Click on a hive to Update</h1> : <UpdateHive hive={this.state.hiveClicked}/>}
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
