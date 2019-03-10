import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

 

export class HomeComponent extends React.Component {
render() {
    return (
      <Container>
          <Row>
            <Col lg={true}>1 of 2</Col>
            <Col lg={true}>2 of 2</Col>
          </Row>
      </Container>
    )
}
}