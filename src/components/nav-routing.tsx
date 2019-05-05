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
                    {
                        this.props.routePath == '/'
                            &&
                            <NavLink 
                                to={this.props.routePath}
                                // activeClassName="selectedNavLink"
                                >
                                {this.props.routeText}
                            </NavLink>
                    }
                    {
                        this.props.routePath !== '/'
                            &&
                            <NavLink 
                                to={this.props.routePath}
                                activeClassName="selectedNavLink"
                                >
                                {this.props.routeText}
                            </NavLink>
                    }
                </Nav.Link>
            </Nav>  
        )
    }
}