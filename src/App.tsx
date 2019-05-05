import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { NavRouting } from './components/nav-routing';
import { HomeComponent } from './views/home/home';
import { PricingComponent } from './views/pricing/pricing';
import { AboutComponent } from './views/about/about';
import { ContactComponent } from './views/contact/contact';
require('dotenv').config();

interface Props {

}
class App extends React.Component<Props> {
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
                  <NavRouting routePath='/' routeText='Home'/>
                  <NavRouting routePath='/about' routeText='What We Do'/>
                  <NavRouting routePath='/pricing' routeText='Pricing'/>             
                  <NavRouting routePath='/contact' routeText='Contact Us'/>                    
              </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* <Route exact path="/" render={() => (
              <Redirect to="/home"/>              
            )} /> */}
              <Route path="/" exact component={HomeComponent} />
              <Route path="/pricing/" component={PricingComponent} />
              <Route path="/about/" component={AboutComponent} />
              <Route path="/contact/" component={ContactComponent} />
            
          </div>
        </Router>
    );
  }
}

export default App;
