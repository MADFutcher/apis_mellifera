import React, { Component } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import AuthService from '../auth-service/AuthService'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }
    }

    service = new AuthService()


    handleOnChange = (e) =>{
        const name = e.target.name
        const val = e.target.value

        this.setState({
            [name]:val
        })

    }

    submitLogin = (e) =>{
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        this.service.login(username, password)
            .then(response => {
                this.setState({
                    username: "",
                    password: "",
                });
                this.props.getUser(response)
                
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div className='App-header'>
                <h1 className='text-indigo display-1'>MELLIFERA &#178;</h1>
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formBasicUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" name="username" placeholder="Enter Username"  onChange={this.handleOnChange}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleOnChange}/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Button variant='secondary' type="submit" onClick={this.submitLogin}>
                                    Login
                                </Button>
                            </Form>
                            </div>
                        </div>
                    </div>
                    <Link to='/signup'>
                        Signup
                      </Link>
                </div>
            </div>
        )
    }
}
