import React, { Component } from 'react';
import posed from 'react-pose';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import './about.css';
import HeaderComponent from '../../components/header/header';
import { ourWebsiteText, seoText, photographyText, responsiveText, hostText } from './constants/about-text';
import Paper from '@material-ui/core/Paper';
import { FeatureCardComponent } from '../../components/feature-card/feature-card';
import { FooterComponent } from '../../components/footer/footer';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import HomeComponent from '../home/home';
import { PricingComponent } from '../pricing/pricing';



interface State {
    isOpen: boolean;
}

interface Props {

}

const SideTransition = posed.div({
    open: {
      x: '0%',
      delayChildren: 10,
      staggerChildren: 50
    },
    closed: { x: '-100%', delay: 10 }
});


export class AboutComponent extends React.Component<Props, State> {
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
            <div>
                <SideTransition className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                    <Container fluid={true}>
                        <Row style={{backgroundColor: 'rgba(225, 83, 64, 0.92)'}}>
                            <Col lg={true} className="bannerShadow">
                                <div className="bannerTextContainer">
                                    <HeaderComponent title={'WHAT WE DO'} hrColor='white' titleColor='white'/>
                                    <div>
                                        <p style={{letterSpacing:"2px", fontSize:'20px', color: 'white'}}>
                                            At Spires & Howe we treat our websites as a product. Rather than contracting our <br />services at an hourly rate, we provide websites at a set price. 
                                            You know <br />exactly what we are building and you know the exact final price.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div style={{marginTop: 80}}>
                            <HeaderComponent title={'OUR PROCESS'}/>
                            <Row className='ourProcessContainer'>
                                <Col lg={2}></Col>
                                <Col lg={4} md={6} sm={12}>
                                    <img src={require('../../assets/icon-images/lightBuldHead.png')}/>
                                    <p className="processHeaderText">You <span style={{color:'red'}}>Dream</span> It</p>
                                    <p>
                                        We meet face to face, over the phone or through email, whatever medium of communication suits you the most. We then work with you closely to help discover and define your key requirements for the perfect website solution.
                                    </p>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <img src={require('../../assets/icon-images/hammer.png')}/>
                                    <p className="processHeaderText">We <span style={{color:'red'}}>Build</span> It</p>
                                    <p>
                                        After gathering your primary requirements, we get to work. Designing and developing professional yet beautiful websites to help boost your business value or fulfil your personal requests. 
                                    </p>
                                </Col>
                                <Col lg={2}></Col>
                            </Row>
                            <Row className="ourProcessContainer justify-content-md-center">
                                <Col lg={4} md={12} sm={12}>
                                    <img src={require('../../assets/icon-images/optimization.png')}/>
                                    <p className="processHeaderText">Together, We <span style={{color:'red'}}>Deploy</span> It</p>
                                    <p>
                                        After creating your website, we work closely with you to get it officially up and running. Doing all the tricky hosting parts ourselves, we provide further support for any future hosting and management changes.
                                    </p>
                                </Col>
                            </Row>
                            <hr></hr>
                        </div>
                        <div className="ourWebsitesContainer">
                            <Row style={{marginTop: 20}}>
                                <Col lg={2} md={2}></Col>
                                <Col lg={4} md={4}>
                                    <FeatureCardComponent cardTitle={'The Best Technologies'} cardDesc={ourWebsiteText}/>
                                </Col>
                                <Col lg={4} md={4}>
                                    <FeatureCardComponent cardTitle={'Search Engine Optimisation'} cardDesc={seoText}/>
                                </Col>
                                <Col lg={2} md={2}></Col>
                            </Row>
                            <Row style={{marginTop: 20}}>
                                <Col lg={2} md={2}></Col>
                                <Col lg={4} md={4}>
                                    <FeatureCardComponent cardTitle={'Optional Photography Included'} cardDesc={photographyText}/>
                                </Col>
                                <Col lg={4} md={4}>
                                    <FeatureCardComponent cardTitle={'iPad and Mobile Responsive'} cardDesc={responsiveText}/>
                                </Col>
                                <Col lg={2} md={2}></Col>
                            </Row>
                            <Row style={{marginTop: 20}}>
                                <Col lg={2} md={2}></Col>
                                <Col lg={4} md={4}>
                                    <FeatureCardComponent cardTitle={'Domain and Hosting'} cardDesc={hostText}/>
                                </Col>
                                <Col lg={4} md={4}>
                                    <FeatureCardComponent cardTitle={'Graphic and Logo Design'} cardDesc={ourWebsiteText}/>
                                </Col>
                                <Col lg={2} md={2}></Col>
                            </Row>
                        </div>
                    </Container>
                    <FooterComponent />
                </SideTransition>
                {/* <div>Icons made by 
                    <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons
                    </a> 
                    <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
                    from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY
                    </a>
                </div> */}
            </div>


        )
    }
}