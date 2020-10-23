import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <h6>{this.props.start_year} - {this.props.end_year}</h6>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}> {this.props.school_name}</h4>
                    <h6> {this.props.degree}</h6>
                    <h6> {this.props.coursework}</h6>
                </Cell>
            </Grid>
        )
    }
}

export default Education;