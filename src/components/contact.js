import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
// import avatar from './avatar1.png';
import contact from './contact.jpg';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Dhanraj Raghunathan </h2>
                        <img
                        src={contact}
                        alt= "Avatar"
                        style={{height: '500px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Passion is the fuel for success - Kobe Bryant
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
                                    <a href="https://www.linkedin.com/in/dhanrajraghunathan/" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-linkedin-in" aria-hidden="true"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/dhanrajraghunathan/" rel="noopener noreferrer" target="_blank">
                                        linkedin.com/dhanrajraghunathan
                                    </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <a href="mailto:draghun@ncsu.edu"><i className="fa fa-envelope" aria-hidden="true"/></a>
                                    <a href="mailto:draghun@ncsu.edu">draghun@ncsu.edu</a>
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