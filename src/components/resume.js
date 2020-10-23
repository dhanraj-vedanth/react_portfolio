import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from './avatar1.png';
import Education from './education';
import Experience from './experience';
import Skill from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src={avatar}
                            alt="Avatar"
                            style = {{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '1em'}}> Dhanraj Raghunathan</h2>
                        <h4 style={{color: 'grey'}}> Network Automation guy</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                        Graduate Student majoring in Computer Systems Networking and Telecommunications Engineering at NC State. 
                        Actively looking for internship & full time opportunities. 
                        I'm passionate about Networking, Automation, Virtualization and software in general.
                        I have hands on experience with multiple projects in industry and academia that involve building Network automation workflows, VPCs, CDNs, Web Development, Operating Systems.
                        I have commendable interpersonal skills and have collaborated with various engineers and clients for problem solving.
                        </p> 
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5> Address </h5>
                        <p> 2800 Brigadoon Drive, Apt 23, Raleigh, NC, 27606</p>
                        <h5> Phone </h5>
                        <p> (919)345-4552 </p>
                        <h5> Email </h5>
                        <p> draghun@ncsu.edu </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2> Education </h2>
                        <Education 
                        start_year={"August 2019"}
                        end_year={"May 2020"}
                        school_name= "North Carolina State University"
                        coursework= " Coursework: Software Engineering, Object-Oriented Development, and Design Patterns, Operating Systems, Algorithms, Linux Networking, Switched Network Management, Internet Protocols"
                        degree= "M.S in Computer Networking"
                        />
                        <Education 
                        start_year={"August 2014"}
                        end_year={"May 2018"}
                        school_name= "Anna University"
                        degree= "B.E in Elections and Communication Engineering"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2> Experience </h2>
                        <Experience 
                        start_year={"May 2020"}
                        end_year={"August 2020"}
                        company = "Facebook Inc."
                        job_title = "Network Automation Engineer Intern"
                        />
                        <Experience 
                        start_year={"June 2018"}
                        end_year={"June 2019"}
                        company = "Tata Communications Ltd."
                        job_title = "Network Automation Engineer"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2> Skills </h2>
                        <Skill
                        skill="Python"
                        progress= {90}
                        />
                        <Skill
                        skill="Networking"
                        progress= {80}
                        />
                        <Skill
                        skill="Ansible"
                        progress= {75}
                        />
                        <Skill
                        skill="Virtualization"
                        progress= {75}
                        />
                        <Skill
                        skill="Ruby and Rails"
                        progress= {60}
                        />
                        <Skill
                        skill="Javascript"
                        progress= {60}
                        />
                        <Skill
                        skill="React"
                        progress= {25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;