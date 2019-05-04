import React, { Component } from 'react';
import posed from 'react-pose';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import HeaderComponent from '../../components/header/header';
import { BrowserRouter as Router, Route, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import './pricing.css';
import { FooterComponent } from '../../components/footer/footer';

const SideTransition = posed.div({
    open: {
      x: '0%',
      delayChildren: 10,
      staggerChildren: 50
    },
    closed: { x: '-100%', delay: 10 }
});

const Item = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});

interface State {
    isOpen: boolean;
}

interface Props {

}

export class PricingComponent extends React.Component<Props, State> {
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
                    <div className="pricingContainer">
                        <HeaderComponent title="PRICING"/>
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
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <FooterComponent />
            </SideTransition>
        )
    }
}