import React, { Component } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }
    }

    handleOnChange = (e) =>{
        const name = e.target.name
        const val = e.target.value

        this.setState({
            [name]:val
        })

    }

    render() {
        return (
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
                        <Button variant='secondary' type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>
        )
    }
}
