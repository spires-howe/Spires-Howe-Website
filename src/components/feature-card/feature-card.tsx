import React from 'react';
import { Paper } from '@material-ui/core';
import './feature-card.css';

interface Props {
    cardTitle: string,
    cardDesc: string
}

interface State {
    isHovered: Boolean
}
export class FeatureCardComponent extends React.Component<Props, State> {
    state = {
        isHovered: false
    }
    render() {
        return (
            <div>
                {   
                    this.state.isHovered
                        &&
                    <Paper className='paperContainer' onMouseEnter={this.onHoverEffect} onMouseLeave={this.offHoverEffect} style={{backgroundColor: '#121212'}}>
                        <p className='ourWebsiteTextHeadersHovered'>{this.props.cardTitle}</p>
                        <hr style={{background: 'white'}}/>
                        <div>
                            <p className='ourWebsiteTextHovered'>{this.props.cardDesc}</p>
                        </div>
                    </Paper>
                }
                {   
                    !this.state.isHovered
                        &&
                    <Paper className='paperContainer' onMouseEnter={this.onHoverEffect} onMouseLeave={this.offHoverEffect}>
                        <p className='ourWebsiteTextHeaders'>{this.props.cardTitle}</p>
                        <hr style={{background: 'black'}}/>
                        <div>
                            <p className='ourWebsiteText'>{this.props.cardDesc}</p>
                        </div>
                    </Paper>
                }
                
            </div>
            
        )
    }

    private offHoverEffect = () => {
        this.setState({
            isHovered: false
        })
    }

    private onHoverEffect = () => {
        this.setState({
            isHovered : true
        })
    }
}