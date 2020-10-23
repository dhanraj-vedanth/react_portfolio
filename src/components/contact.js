import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from './avatar1.png';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Dhanraj Raghunathan </h2>
                        <img
                        src={avatar}
                        alt= "Avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                    </Cell>
                    <Cell col={6}> 
                        <h2> Get in touch! </h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (919)345-4552
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i class="fab fa-linkedin-in" aria-hidden="true"/>
                                    <a href="https://www.linkedin.com/in/dhanrajraghunathan/" rel="noopener noreferrer" target="_blank">
                                        linkedin.com/dhanrajraghunathan
                                    </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        draghun@ncsu.edu
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Contact;