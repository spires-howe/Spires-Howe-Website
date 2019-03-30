import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 


interface Props {
    title: string
    hrColor?: string;
    titleColor?: string;
}

export default class HeaderComponent extends React.Component<Props> {
    render() {
        return (
            <div>
                <Row style={{marginTop: '20px', padding: 10}}>
                    <Col lg={true}>
                        <h2 style={{fontWeight:'bold', letterSpacing:'10px', color: this.props.titleColor}}>{this.props.title}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <hr style={{backgroundColor:this.props.hrColor}}></hr>
                    </Col>
                </Row>
            </div>
        )
    }
}
