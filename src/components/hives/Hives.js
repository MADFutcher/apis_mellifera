import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Map from '../gmap/Gmap'
import AuthService from '../services/AuthService'
import HiveService from '../services/HiveServices'
import UpdateHive from './UpdateHive'
import NavBar from '../navbar/NavBar'
import AddHive from '../hives/AddHive'
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
    
    componentDidUpdate(prevProps){
        if(this.props.user !== prevProps.user){
            this.setState({user: this.props.user})
        }
    }

    logout = (e) =>{
        this.AuthService.logout()
        this.props.logoutUser(null)
        this.props.history.push('/')
    };

    handleClickedHive = (hive) =>{
        const hiveId = hive
        this.HiveService.getHive(hiveId)
                        .then(response => {
                            this.setState({hiveClicked: response})
                        }, err => console.log(err))        
    }

    handleUpdateHive = (hive) =>{
        this.HiveService.updateHive(hive)
                        .then(response => {
                            this.AuthService.loggedin()
                                            .then(user => {
                                                this.props.refreshUserData(user)}, err=>console.log(err))
                        }, err=>console.log(err))
    }

    render() {
        console.log(this.props)
        let heading
        if(this.state.user.hives.length===0){
            heading = <React.Fragment><h1>You need to register a hive first!</h1> <AddHive user={this.props.user}/> </React.Fragment>
        }else{
            heading = <h1>Click on a hive to Update</h1>
        }
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
                           <UpdateHive hive={this.state.hiveClicked} updateHive={this.handleUpdateHive}/>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <AddHive user={this.props.user} {...this.props}/>
                        </Col>
                    </Row> */}
                </div>
            </React.Fragment>
        )
    }
}
