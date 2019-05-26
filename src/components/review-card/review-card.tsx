import React from 'react';
import Paper from '@material-ui/core/Paper';

export default class ReviewCard extends React.Component {
    render() {
        return (
            <Paper>
                <div style={{padding: 15}}>
                    <p style={{fontSize: 20}}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis at consectetur."
                    </p>
                    <div>
                        <p style={{fontSize: 15, letterSpacing: 1}}>
                            Director at Sales Development Programs Ltd
                        </p>
                    </div>               
                </div>
            </Paper>
        )
    }
}