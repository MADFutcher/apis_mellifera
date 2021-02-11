import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import AuthService from '../auth-service/AuthService'

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            surname: '',
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

    submitSignup = (e) =>{
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const firstname = this.state.firstname;
        const surname = this.state.surname;

        this.service.signup(username, password, firstname, surname)
            .then(response => {
                this.setState({
                    username: "",
                    password: "",
                    firstname:'',
                    surname: '',
                });

                this.props.getUser(response)
                this.props.history.push('/')
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
                                        <Form.Group controlId="formBasicFirstname">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control type="text" name="firstname" placeholder="Enter Firstname"  value={this.state.firstname} onChange={this.handleOnChange}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicSurname">
                                            <Form.Label>Surname</Form.Label>
                                            <Form.Control type="text" name="surname" placeholder="Enter Surname"  value={this.state.surname} onChange={this.handleOnChange}/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formBasicUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" name="username" placeholder="Enter Username"  value={this.state.username} onChange={this.handleOnChange}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Button variant='secondary' type="submit" onClick={this.submitSignup}>
                                    Signup
                                </Button>
                            </Form>
                            </div>
                        </div>
                    </div>
                    <Link to='/'>
                      Login
                    </Link>
                </div>
            </div>
        )
    }
}
