import React, { Component } from "react";
import './NavBar.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.user,
    };
  }

  logout = () =>{
      this.props.logUserOut()
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.loggedInUser ?
            <Navbar className='bg-indigo' expand="lg" sticky="top">
            <Navbar.Brand className='text-marigold med pl-2'>MELLIFERA &#178;</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to='/profile' className='text-marigold med pr-2 mr-3'>
                          {this.state.loggedInUser.username}
                    </Link>
                    <Link to='/' className='text-marigold med pr-2' onClick={this.logout}>
                        Logout
                    </Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          : null
      }
        
      </React.Fragment>
    );
  }
}
