import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl';
import './nav-bar.css';

export class NavBarComponent extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Spires & Howe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="nav-item">Pricing</Nav.Link>
                    <Nav.Link href="#dsf">What We Do</Nav.Link>
                    <Nav.Link href="#">Contact Us</Nav.Link>                    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    
}