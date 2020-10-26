import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
// import avatar from './avatar1.png';
import bb1 from './bb_1.jpg';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={bb1}
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-txt">
                            <h2> Network x Automation Engineer</h2>
                            <hr />

                            <p> Python | Networking | Linux | Virtualization | Automation & Orchestration | Cloud | Docker | CI/CD | Rails | React</p>

                            <div className="social-links">
                                {/* Github */}
                                <a href="https://github.com/dhanraj-vedanth" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-github" aria-hidden="true"></i>
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/dhanrajraghunathan/" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landing;