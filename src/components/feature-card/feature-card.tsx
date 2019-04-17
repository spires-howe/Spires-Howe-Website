import React from 'react';
import { Paper } from '@material-ui/core';
import './feature-card.css';

interface Props {
    cardTitle: string,
    cardDesc: string,
}

interface State {
    isHovered: Boolean
}
export class FeatureCardComponent extends React.Component<Props, State> {
    
    render() {
        return (
            <div>
                <Paper className='paperContainer'>
                    <div>
                        <p className='ourWebsiteTextHeaders'>{this.props.cardTitle}</p>
                    </div>
                    <hr style={{background: 'red'}}/>
                    <div>
                        <p className='ourWebsiteText'>{this.props.cardDesc}</p>
                    </div>
                </Paper>
            </div>
            
        )
    }
}