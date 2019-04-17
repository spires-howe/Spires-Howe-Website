import React from 'react';
import Row from 'react-bootstrap/Row'; 
import './footer.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { AboutComponent } from '../../views/about/about';
import { HomeComponent } from '../../views/home/home';

export class FooterComponent extends React.Component {

    render(){
        return (
                <div className='footerContainer justify-content-md-center'>
                    <Container fluid={true}>
                        <Row style={{paddingTop: 30}}> 
                            <Col lg={3} sm={6}> 
                                <div>
                                <NavLink to="/home">
                                    <p style={{color: 'white'}}>
                                    Spires & Howe
                                    </p>
                                </NavLink> 
                                </div>
                            </Col>
                            <Col lg={3} sm={6}> 
                                <div>
                                    <p>What We Do</p>
                                </div>
                            </Col>
                            <Col lg={3} sm={6}> 
                                <div>
                                    <p>Pricing</p>
                                </div>
                            </Col>
                            <Col lg={3} sm={6}> 
                                <div>
                                    <p>Contact Us</p>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{backgroundColor: 'white'}}/>
                        <Row> 
                            <Col lg={true}>
                                <p>
                                    02102865303
                                </p>
                            </Col>
                        </Row>
                        <Row> 
                            <Col lg={true}>
                                <p>
                                    spiresnhowe@gmail.com
                                </p>
                                
                            </Col>
                        </Row>
                        <Row> 
                            <Col lg={true}>
                                <p>
                                    Copyright © 2015 Spires & Howe. All rights reserved.
                                </p>
                            </Col>
                        </Row>
                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>              
                        )} />
                    </Container>
                </div>
        )
    }
}