import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <h6>{this.props.start_year} - {this.props.end_year}</h6>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}> {this.props.company}</h4>
                    <h6> {this.props.job_title}</h6>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;