import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skill extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>
                        <h9 style={{padding: '0px'}}> {this.props.skill} </h9> <ProgressBar style= {{margin: 'auto', width: '75%'}} progress= {this.props.progress}/>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skill