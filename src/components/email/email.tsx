import React, { Component, createRef } from 'react';
import Form from 'react-bootstrap/Form';
import * as emailjs from 'emailjs-com';

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
             console.log('Email Succesfully Sent!')
         })
         .catch(err => console.log("Error has occured", err));
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                Name:
                </label>
                
                <input 
                    type="text"
                    placeholder='name'
                    onChange={(e) => this.setState({name: e.target.value})}/>
                <input 
                    type="text"
                    placeholder='phone number'
                    onChange={(e) => this.setState({phoneNumber: e.target.value})}/>
                <input 
                    type="text"
                    placeholder='email'
                    onChange={(e) => this.setState({email: e.target.value})}/>
                <input 
                    type="text"
                    placeholder='message'
                    onChange={(e) => this.setState({message: e.target.value})}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}