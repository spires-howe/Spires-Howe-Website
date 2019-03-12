import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './home.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom"
import { AboutComponent } from '../about/about';
import posed from 'react-pose';
 

interface Props {
  showLearnMoreButton: any;
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
      <Container fluid={true}>
          <Row>
            <Col lg={true}>
              <div className="homeHeaderContainer"> 
                <h1 className="homeHeaderText">Spires & Howe</h1>
                <div className="homeHeaderDescContainer">
                  <p className="homeHeaderDescContainerText">We build custom and affordable websites, tailored to your needs. </p>
                  <p className="homeHeaderDescContainerText homeHeaderDescContainerText--secondary">Helping out our Kiwi Community.</p>
                <hr className="headerHR"/>
                </div>
              </div>
            </Col>
          </Row>
      </Container>
      </SideTransition>
    )
  }
}

export default HomeComponent;
