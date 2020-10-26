import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from './avatar1.png';
import Education from './education';
import Experience from './experience';
// import Skill from './skills';
// import CloudIcon from '@material-ui/icons/Cloud';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Resume extends Component{
    facebook = [
        "Reduced time taken to handle a network break-fix event by over 1 hr/ticket by automating 80% of the network event steps using a workflow",
        "Developed 3 core modules for an asynchronous service to spin workflows resulting in a loosely coupled service with 30% reduced DB hits"
    ]
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

                        <h2> Dhanraj Raghunathan</h2>
                        <h4 style={{color: 'grey'}}> Network Automation guy</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5> Address </h5>
                        <p> 2800 Brigadoon Drive, Apt 23, Raleigh, NC, 27606</p>
                        <h5> Phone </h5>
                        <p> (919)345-4552 </p>
                        <h5> Email </h5>
                        <p> draghun@ncsu.edu </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5> Skills </h5>
                        <p> Python <ProgressBar now={90} animated variant="success"/> </p>
                        <p> Bash <ProgressBar now={60} animated variant="success"/> </p>
                        <p> JavaScript <ProgressBar now={50} animated variant="success"/> </p>
                        <p> Networking <ProgressBar now={80} animated variant="success"/> </p>
                        <p> Ansible <ProgressBar now={75} animated variant="success"/> </p>
                        <p> Virtualization <ProgressBar now ={75} animated variant="success" /> </p>
                        <p> Ruby and Rails  <ProgressBar now={60} animated variant="success"/> </p>
			            <p> React <ProgressBar now={30} animated variant="success"/> </p>
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
                        jds = {this.facebook}
                        jd1 = "Reduced time taken to handle a network break-fix event by over 1 hr/ticket by automating 80% of the network event steps using a workflow"
                        jd2 = "Developed 3 core modules for an asynchronous service to spin workflows resulting in a loosely coupled service with 30% reduced DB hits"
                        />
                        <Cell col={8}>
                        </Cell>
                        <Experience 
                        start_year={"June 2018"}
                        end_year={"June 2019"}
                        company = "Tata Communications Ltd."
                        job_title = "Network Automation Engineer"
                        
                        jd1= "Led the end-end implementation of the Looking Glass project resulting in improved polling response time of the servers using SSH, Python, and Ansible for orchestration.Optimized memory and CPU usage by 44% in the Linux cluster by virtualizing servers using KVM and ESXi."
                        jd2= "Used Versa’s APIs with Python resulting in 40% increase in on-boarding speed. Developed two core Python modules for the Ansible stack : Parse and Compute"
                        />

                        <h8><a href= "https://github.com/dhanraj-vedanth/react_portfolio/blob/master/dhanraj_raghunathan.pdf"> <strong>Check out the complete resume here </strong>  </a></h8>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;