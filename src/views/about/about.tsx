import React, { Component } from 'react';
import posed from 'react-pose';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import './about.css';

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
                        <Row>
                            <Col lg={true}>
                                <div className="bannerTextContainer">
                                    <h2 style={{fontWeight:'bold', letterSpacing:'10px'}}>WHAT WE DO</h2>
                                    {/* <hr></hr> */}
                                    <div>
                                        <div className={"handIconContainer"}>
                                            <div style={{backgroundColor:'white', width:'100px'}} className={'handIcon'}>
                                                <img src={require('../../assets/icon-images/handshake.png')}/>   
                                            </div>
                                        </div>
                                        <p style={{letterSpacing:"2px", fontSize:'20px'}}>
                                            At Spires & Howe we treat our websites as a product. Rather than contracting our <br />services at an hourly rate, we provide websites at a set price. 
                                            You know <br />exactly what we are building and you know the exact final price.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '20px'}}>
                            <Col lg={true}>
                                <h2 style={{fontWeight:'bold', letterSpacing:'10px', marginTop:'50px'}}>OUR PROCESS</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row style={{textAlign:'center'}}>
                            <Col lg={4} md={6} sm={12}>
                                <img src={require('../../assets/icon-images/lightBuldHead.png')}/>
                                <p className="processHeaderText">You <span style={{color:'red'}}>Dream</span> It</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, felis et accumsan iaculis, tortor augue semper nibh, non porttitor est felis nec ligula. Etiam tellus mauris, accumsan eget pharetra vel, accumsan at ligula.
                                </p>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <img src={require('../../assets/icon-images/hammer.png')}/>
                                <p className="processHeaderText">We <span style={{color:'red'}}>Build</span> It</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, felis et accumsan iaculis, tortor augue semper nibh, non porttitor est felis nec ligula. Etiam tellus mauris, accumsan eget pharetra vel, accumsan at ligula.
                                </p>
                            </Col>
                            <Col lg={4} md={12} sm={12}>
                                <img src={require('../../assets/icon-images/optimization.png')}/>
                                <p className="processHeaderText">Together, We <span style={{color:'red'}}>Deploy</span> It</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, felis et accumsan iaculis, tortor augue semper nibh, non porttitor est felis nec ligula. Etiam tellus mauris, accumsan eget pharetra vel, accumsan at ligula.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </SideTransition>
                <div>Icons made by 
                    <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons
                    </a> 
                    <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
                    from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY
                    </a>
                </div>
            </div>


        )
    }
}