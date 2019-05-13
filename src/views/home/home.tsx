import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './home.css';
import { BrowserRouter as Router, Route, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { AboutComponent } from '../about/about';
import posed from 'react-pose';
import Button from 'react-bootstrap/Button';
import { FooterComponent } from '../../components/footer/footer';

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
                <Col lg={12} className="homeInitialContainer">
                  <div>
                    <div className="homeHeaderContainer">                     
                        <h1 className="homeHeaderText">
                        
                        Spires 
                        <img src={require('../../assets/SpiresHoweLogo.png')} height='150px' style={{textAlign: 'center'}}/>
                        
                         Howe</h1>
                        <div className="homeHeaderDescContainer">
                          <p className="homeHeaderDescContainerText">We build <span style={{color:'red'}}>custom</span> and <span style={{color:'red'}}>affordable websites</span>, tailored to your needs. </p>
                          <p className="homeHeaderDescContainerText homeHeaderDescContainerText--secondary">Websites as a product, not a contracting service.</p>
                          <hr className="headerHR"/>
                          <div className="buttonContainer">
                            <NavLink to="/about"><Button variant="outline-dark" style={{fontSize: 21}}>Learn More ➥</Button></NavLink> 
                          </div>
                          <div className="circleButtonContainer">
                            <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>
                              <Button variant="outline-dark" className="circleButton">↓</Button>
                            </Link>
                          </div>
                        </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="nzBanner">
                <Col lg={true}>
                  <Element name="test1" className="element" >
                    <div style={{marginTop: 100}}>
                      <div style={{textAlign: 'center'}}>
                        <img src={require('../../assets/icon-images/fern.png')} style={{height: 120}}/>
                      </div>
                      <div style={{marginTop: 10}}>
                        <p className="kiwiHeaderText">
                            Proudly Kiwi  
                        </p>
                      </div>
                      <div className="kiwiDescContainer">
                        <p style={{marginBottom: 0}}>
                          Spires & Howe is a born and bred Kiwi Company. Based in Auckland, we wish to empower
                        </p>
                        <p style={{marginBottom: 0}}>
                          all our local Kiwi businesses with professional, affordable and beautiful websites.
                        </p>
                        <p>
                          All websites a hosted here in New Zealand.
                        </p>
                      </div>
                    </div>
                  </Element>
                </Col>
              </Row>
              <Row>
                <Col lg={true}>
                  <div className="reviewContainer">
                    <div>
                      <p className="reviewTitleText">
                        Website Features
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{offset: 4, span: 4}}>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col lg={{offset: 3, span: 2}}>
                  <div className="homeFeatureIconContainer">
                    <img src={require('../../assets/icon-images/computer.png')}/>
                    <p className="homeFeatureIconText">Best Website Technologies</p>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="homeFeatureIconContainer">
                    <img src={require('../../assets/icon-images/web.png')}/>
                    <p className="homeFeatureIconText">Search Engine Optimisation</p>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="homeFeatureIconContainer">
                    <img src={require('../../assets/icon-images/responsive.png')}/>
                    <p className="homeFeatureIconText">iPad and Mobile Responsive</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{offset: 4, span: 2}}>
                  <div className="homeFeatureIconContainer">
                    <img src={require('../../assets/icon-images/camera.png')}/>
                    <p className="homeFeatureIconText">Free Photography</p>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="homeFeatureIconContainer">
                    <img src={require('../../assets/icon-images/domain.png')}/>
                    <p className="homeFeatureIconText">Domain and Hosting</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={true}>
                  <div style={{marginTop: 10}}>
                    <NavLink to="/about">
                      <Button variant="outline-dark">More Features ➥</Button>
                    </NavLink>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={true}>
                  <div className="reviewContainer">
                    <div>
                      <p className="reviewTitleText">
                        Reviews
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="reviewContainer">
                    <div>
                      <p className="reviewTitleText">
                        Pricing
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{offset: 4, span: 4}}>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col md={{offset: 1, span: 10}} lg={{offset: 3, span: 4}}>
                    <div className="priceColumnContainer">
                        <div className="priceBannerContainer">
                            <p style={{marginBottom: 0}} className="bundleText">
                                Full Website Bundle  
                            </p>
                            <hr />
                            <p className="priceText">$ 1250/ single price</p>
                        </div>
                        <div className="bundleFeaturesContainer">
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                    - Custom Design
                                </p>
                            </div>
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                    - Multiple Pages
                                </p>
                            </div>
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                    - Search Engine Optimization
                                </p>
                            </div>
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                    - Free Photography
                                </p>
                            </div>
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                    - iPad and Mobile Responsive
                                </p>
                            </div>
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                - Custom Domain Name and Hosting
                                </p>
                            </div> 
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                - Ongoing Contact Support
                                </p>
                            </div> 
                            <div className="bundleFeatureContainer">
                                <p className="bundleFeatureText">
                                - $20 per hour additional feature cost*
                                </p>
                            </div>    
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div style={{marginTop: 40}}>
                        <p className="pricingDescText"> 
                            - Please Enquire for payment methods/options 
                            <NavLink to='/contact' style={{marginLeft: 3}}>
                                here. 
                            </NavLink>
                        </p>
                        <p className="pricingDescText"> * After your website has been fully developed, if there is any additional features you wish to add in the future we will charge a rate of $20 per hour.</p>
                        <p className="pricingDescText"> * Feel free to ask a direct quote on how long extra development will take.</p>
                        <NavLink to="/pricing"><Button variant="outline-dark">View More Pricing ➥</Button></NavLink>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col lg={true}>
                  <div className="reviewContainer">
                    <div>
                      <p className="reviewTitleText">
                        Contact Us
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{offset: 4, span: 4}}>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="homeContactContainer">
                    <p style={{marginBottom: 0}}>We are located in Auckland, New Zealand and would love to meet face to face with you.</p>
                    <p>Feel free to ask any additional free quotes or share your ideas.</p>
                    <NavLink to="/contact"><Button variant="outline-dark">Contact Us ➥</Button></NavLink>
                  </div>
                </Col>
              </Row>
          </Container>          
            {/* <Route path="/about/" component={AboutComponent} /> */}
          <FooterComponent />
        </div>
      </SideTransition>
    )
  }
}

export default HomeComponent;
