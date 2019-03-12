import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

interface Props {
    routePath: string;
    routeText: string;
}


export class NavRouting extends React.Component<Props> {

    render() {
        return (
            <Nav>
                <Nav.Link>
                    <NavLink 
                        to={this.props.routePath}
                        activeClassName="selectedNavLink"
                        >
                        {this.props.routeText}
                    </NavLink>
                </Nav.Link>
            </Nav>  
        )
    }
}