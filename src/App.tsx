import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl';
import './App.css';
import { NavBarComponent } from './components/nav-bar/nav-bar';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { PricingComponent } from './components/pricing/pricing';
import { ContactComponent } from './components/contact/contact';
import posed from 'react-pose';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect } from "react-router-dom"
import { NavRouting } from './components/nav-routing';

class App extends React.Component {
 
  render() {
    return (
        <Router>
          <div> 
            <Navbar bg="light" expand="lg" sticky='top' >
            <Nav>
              <Navbar.Brand>
                <Link to="/">Spires & Howe</Link>
              </Navbar.Brand>
            </Nav>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
              <Nav className="ml-auto">
                  <NavRouting routePath='/home' routeText='Home'/>
                  <NavRouting routePath='/about' routeText='What We Do'/>
                  <NavRouting routePath='/pricing' routeText='Pricing'/>             
                  <NavRouting routePath='/contact' routeText='Contact Us'/>                    
              </Nav>
              </Navbar.Collapse>
            </Navbar> 

            <Route exact path="/" render={() => (
              <Redirect to="/home"/>              
            )} />
            <Route path="/home/" component={HomeComponent}/>
            <Route path="/pricing/" component={PricingComponent} />
            <Route path="/about/" component={AboutComponent} />
            <Route path="/contact/" component={ContactComponent} />
          </div>
        </Router>
    );
  }
}

export default App;
