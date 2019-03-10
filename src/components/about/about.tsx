import React, { Component } from 'react';
import posed from 'react-pose';

interface State {
    isVisible: boolean;
}

interface Props {

}

const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  });

export class AboutComponent extends React.Component<Props, State> {
    state = {
        isVisible: false
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
    }


    render() {
        const { isVisible } = this.state;
        return (
            <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />
        )
    }
}