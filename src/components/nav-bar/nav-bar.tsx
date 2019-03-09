import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl'; 


export class NavBarComponent extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Spires & Howe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Pricing</Nav.Link>
                    <Nav.Link href="#link">What We Do</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>                    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    
}