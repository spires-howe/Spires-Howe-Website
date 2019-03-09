import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl';
import './App.css';
import { NavBarComponent } from './components/nav-bar/nav-bar';
import { ENGINE_METHOD_DIGESTS } from 'constants';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { PricingComponent } from './components/pricing/pricing';
import { ContactComponent } from './components/contact/contact';

enum NavItem {
  Home,
  Pricing,
  About,
  Contact
}

interface Props {

}

interface State {
  currentSelectedNavLink: NavItem;
}

class App extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      currentSelectedNavLink: NavItem.Home
    }
  }
  
  render() {
    const contentToRender = this.loadContentToRender(this.state.currentSelectedNavLink);
    return (
      <div className="App">
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home" onClick={() => this.changeSelectedNavItem(NavItem.Home)}>Spires & Howe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="ml-auto">
              <Nav.Link href="#pricing" className="nav-item" onSelect={() => this.changeSelectedNavItem(NavItem.Pricing)}>Pricing</Nav.Link>
              <Nav.Link href="#about" onSelect={() => this.changeSelectedNavItem(NavItem.About)}>What We Do</Nav.Link>
              <Nav.Link href="#contact" onSelect={() => this.changeSelectedNavItem(NavItem.Contact)}>Contact Us</Nav.Link>                    
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <header className="App-header">
        {contentToRender}
        </header>
      </div>
    );
  }

  private loadContentToRender = (selectedNavLink: NavItem) => {
    switch(selectedNavLink) {
      case NavItem.Home:
        return (
          <HomeComponent />
        )
      case NavItem.About:
        return (
          <AboutComponent />
        )
      case NavItem.Pricing:
        return (
          <PricingComponent />
        )
      case NavItem.Contact:
        return (
          <ContactComponent />
        )
    }
  }

  private changeSelectedNavItem = (selectedNavLink: NavItem) => {
    this.setState({
      currentSelectedNavLink: selectedNavLink
    })
  }
}

export default App;
