import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

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