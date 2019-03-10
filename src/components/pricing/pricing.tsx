import React, { Component } from 'react';
import posed from 'react-pose';

const SideTransition = posed.ul({
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

export class PricingComponent extends React.Component {
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
                <p>HELLO THERE</p>
                <p>HELLO THERE</p>
                <p>HELLO THERE</p>
                <p>HELLO THERE</p>
                <p>HELLO THERE</p>
                <p>HELLO THERE</p>
                <p>HELLO THERE</p>
                <p>HELLO THERE</p>
                
            </SideTransition>
        )
    }
}