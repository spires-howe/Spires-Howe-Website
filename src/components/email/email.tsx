import React, { Component, createRef } from 'react';
import Form from 'react-bootstrap/Form';
import * as emailjs from 'emailjs-com';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './email.css'

interface State {
    name: string;
    phoneNumber: string;
    email: string;
    message: string;
}

interface Props {

}
export class EmailComponent extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',
            message: '',
        }
    }

    componentDidMount() {
        emailjs.init("user_rWooA09BmjbRua0EsUcL6");
    }

    private handleSubmit(e: any) {
        e.preventDefault();
        let template_params = {
            "name": this.state.name,
            "phoneNumber": this.state.phoneNumber,
            "email": this.state.email,
            "message": this.state.message
         }
         
         let service_id = "123";
         let template_id = "bus_email";
         emailjs.send(service_id, template_id, template_params).then(res => {
             alert('Email Successfully Sent!');
             console.log('Email Succesfully Sent!');
         })
         .catch(err => console.log("Error has occured", err));
    }

    render() {
        return (
                <Form onSubmit={(e: any) => this.handleSubmit(e)} style={{marginBottom: '50px'}}>
                    <Form.Group controlId='formBasicName' as={Row}> 
                        <Col lg="5" sm="8">
                            <Form.Control 
                                type="text"
                                placeholder='name'
                                onChange={(e: any) => this.setState({name: e.target.value})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col lg="5" sm="8">
                            <Form.Control 
                                type="text"
                                placeholder='phone number'
                                onChange={(e:any) => this.setState({phoneNumber: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                        <Col lg="5" sm="8">
                            <Form.Control 
                                type="text"
                                placeholder='email'
                                onChange={(e:any) => this.setState({email: e.target.value})}/>
                        </Col>
                        
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                        <Col lg="8" sm="10">
                            <Form.Control as="textarea" rows="5"
                                type="text"
                                placeholder='message'
                                onChange={(e:any) => this.setState({message: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    
                    <ButtonToolbar>
                        <Button type='submit' variant="outline-danger">Send</Button>
                    </ButtonToolbar>
                </Form>
            
        )
    }
}