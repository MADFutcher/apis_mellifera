import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

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
        <Navbar className='bg-indigo' expand="lg">
            <Navbar.Brand className='text-marigold' href="#home">MELLIFERA &#178;</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link className='text-marigold' href="#">Welcome {this.state.loggedInUser.username}</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link className='text-marigold' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-marigold' href="#link">Link</Nav.Link>
                    <Nav.Link className='text-marigold' href="#" onClick={this.logout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
      </React.Fragment>
    );
  }
}
