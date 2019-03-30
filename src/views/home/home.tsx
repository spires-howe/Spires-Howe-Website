import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './home.css';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import { AboutComponent } from '../about/about';
import posed from 'react-pose';
import Button from 'react-bootstrap/Button';
 

interface Props {
}
interface State {
  isOpen: boolean;
}

const SideTransition = posed.div({
  open: {
    x: '0%',
    delayChildren: 10,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 10 }
});


export class HomeComponent extends React.Component<Props, State> {
  state = {
    isOpen: false
}

componentDidMount() {
  setTimeout(this.toggle);
}

toggle = () => this.setState({ isOpen: !this.state.isOpen });

render() {
    const { isOpen } = this.state;
    return (
      <SideTransition className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        <div>
          <Container fluid={true}>
              <Row>
                <Col lg={true}>
                  <div className="homeHeaderContainer"> 
                    <h1 className="homeHeaderText">Spires & Howe</h1>
                    <div className="homeHeaderDescContainer">
                      <p className="homeHeaderDescContainerText">We build <span style={{color:'red'}}>custom</span> and <span style={{color:'red'}}>affordable websites</span>, tailored to your needs. </p>
                      <p className="homeHeaderDescContainerText homeHeaderDescContainerText--secondary">Websites as a product, not a contracting service.</p>
                      <hr className="headerHR"/>
                      <div className="buttonContainer">
                        <NavLink to="/about"><Button variant="outline-dark">Learn More</Button></NavLink> 
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
          </Container>
            <Route path="/about/" component={AboutComponent} />
        </div>
      </SideTransition>
    )
  }
}

export default HomeComponent;
