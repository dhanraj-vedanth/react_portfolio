import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import about from './about.jpg';

class About extends Component{
    render(){
        return(
            <div className="about-me-div">
                <Grid>
                    <Cell col= {5}>
                        <div style={{textAlign: 'center'}}>
                            <h2 style={{textAlign: 'center'}}> Hello again! </h2>
                            <img 
                            src={about}
                            alt="About"
                            style = {{height: '400px'}}
                            />
                        </div>
                    </Cell>
                    <Cell col={7}>
                    <div className="about-right">
                        <h4> Who am I ? </h4>
                        <h7> Graduate Student majoring in Computer Systems Networking and Telecommunications Engineering at NC State.</h7>
                        <hr></hr>
                        <h4>What am I looking for? </h4>
                        <h7> Internship & full time opportunities. (Impact oriented work!)</h7>
                        <hr></hr>
                        <h4> What am I passionate about? </h4>
                            <ul>
                                <li>I'm passionate about Networking, Automation, Virtualization and software in general</li>
                                <li>I have hands on experience with multiple projects in industry and academia that involve building Network automation workflows, VPCs, CDNs, Web Development, Operating Systems</li>
                                <li>I have commendable interpersonal skills and have collaborated with various engineers and clients for problem solving</li>
                            </ul>
                        <hr></hr>
                        <h4> What else do I do and love? </h4>
                            <h7>Professional Table Tennis player, novice swimmer and chess player. Basketball aficionado (Go Lakers!) and I have a wide spectrum of music I love!</h7>
                        <hr></hr>
                    </div> 
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default About;