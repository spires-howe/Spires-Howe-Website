import React, { Component } from 'react';
import { EmailComponent } from '../../components/email/email';
import Container from 'react-bootstrap/Container';
import HeaderComponent from '../../components/header/header';
import './contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import posed from 'react-pose';


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

export class ContactComponent extends React.Component<Props, State> {
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
                        <div className='contactContainer'>
                            <HeaderComponent title="CONTACT US"/>
                            <div className='contactDescriptionContainer'>
                                <p style={{fontSize:'25px', textAlign:'center'}}>We are located in <span style={{fontWeight:'bold', color:'red'}}>Auckland, New Zealand</span> and would love to meet face to face with you.</p>
                                <p style={{fontSize:'20px', textAlign:'center'}}>However we do accept clients from all over the world!</p>
                            </div>
                            <Row className="multiBannerContainer">
                                <Col lg={4} md={6} sm={12} style={{borderRight: '1px solid grey'}}>
                                    <img src={require('../../assets/icon-images/phone-call.png')}/>
                                    <p className="processHeaderText">Mobile Details</p>
                                    <p style={{fontSize: 17}}>
                                        02102865303
                                    </p>
                                </Col>
                                <Col lg={4} md={12} sm={12}>
                                    <img src={require('../../assets/icon-images/envelope.png')}/>
                                    <p className="processHeaderText">Email Details</p>
                                    <p style={{fontSize: 17}}>
                                        spiresnhowe@gmail.com
                                    </p>
                                </Col>
                            </Row>
                            <div className="directEmailContainer">
                                <HeaderComponent title="EMAIL US DIRECTLY"/>
                            </div>
                            <EmailComponent />
                        </div>
                    </Container>
                </SideTransition>
            </div>
        )
    }
}