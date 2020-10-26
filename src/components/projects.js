import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.multapplied.net/wp-content/uploads/2019/11/header-virtualization-best-practice.jpg) center / cover'}} >IaaS using Linux server Virtualization </CardTitle>
            <CardText>
            <ul>
              <li>Built a multi-tenant virtual private cloud solution (on-demand VMs, subnets, and containers) with multiple KVM/QEMU hypervisors, docker engine, L2 and NAT/DHCP Linux, and OVS bridges</li>
              <li>Used network namespaces, IPtables, and GRE/VXLAN tunnels between multiple hypervisors for isolated multi-cloud/hybrid cloud setup </li>
            </ul>
            </CardText>
            <CardActions border>
              <a href="https://github.com/dhanraj-vedanth/IaaS_VPC_CDN" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.multapplied.net/wp-content/uploads/2019/11/header-virtualization-best-practice.jpg) center / cover'}} >Automation and Orchestration </CardTitle>
            <CardText>
            <ul>
              <li>Designed automation of a VPC infrastructure using KVM/QEMU, Libvirt, Docker, and Ansible. Developed the cloud infrastructure and network orchestrator using Python, Shell scripts, and JSON data model</li>
              <li>Followed model-driven architecture with clearly defined northbound, logic layer, and southbound </li>
            </ul>
            </CardText>
            <CardActions border>
              <a href="https://github.com/dhanraj-vedanth/IaaS_VPC_CDN" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.multapplied.net/wp-content/uploads/2019/11/header-virtualization-best-practice.jpg) center / cover'}} > VPC-CDN and Edge Computing </CardTitle>
            <CardText>
            <ul>
              <li>Designed and deployed a per-tenant file-sharing Edge Computing based CDN service. Edge nodes are present in different locations on demand and use a custom file-based load balancing scheme</li>
              <li>Used InfluxDB and Grafana to visualize and alert. Implemented a custom self-healing feature for containers (Kubernetes inspired) </li>
            </ul>
            </CardText>
            <a href="https://github.com/dhanraj-vedanth/IaaS_VPC_CDN" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
            </a>
          </Card>

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
          <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.chriskranky.com/wp-content/uploads/2016/02/stock-footage-details-of-working-ethernet-switch-in-the-data-center-room.jpg) center / cover'}} > Point to Multi-point system with ARQ </CardTitle>
                  <CardText>
                      <ul>
                          <li>Implemented a data transfer system using UDP and developed a reliability scheme on the end-systems</li>
                          <br></br>
                    </ul>
                </CardText>
                <CardActions border>
                <a href="https://github.com/dhanraj-vedanth/point_to_multipoint_with_ARQ" rel="noopener noreferrer" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                </CardActions>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.chriskranky.com/wp-content/uploads/2016/02/stock-footage-details-of-working-ethernet-switch-in-the-data-center-room.jpg) center / cover'}} > Peer to Peer system with a Distributed Index </CardTitle>
                  <CardText>
                      <ul>
                          <li> Application-level protocol to accomplish an asynchronous, multi-threaded request-response P2P communication system (TCP) with a centralized registration server</li>
                    </ul>
                </CardText>
                <CardActions border>
                <a href="https://github.com/dhanraj-vedanth/P2P_DI" rel="noopener noreferrer" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                </CardActions>
                </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images4.alphacoders.com/306/30628.jpg) center / cover'}} > Athena [Rails] </CardTitle>
                  <CardText>
                      <ul>
                          <li>Designed an E-Learning web application using Rails. Admin has control over the application and can view history. </li>
                          <br></br>
                    </ul>
                </CardText>
                <CardActions border>
                <a href="https://github.com/dhanraj-vedanth/Athena" rel="noopener noreferrer" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}} > Portfolio [React] </CardTitle>
                  <CardText>
                      A kickass React based portfolio.
                      You're viewing it right now!
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                </CardText>
                <CardActions border>
                  <a href="https://github.com/dhanraj-vedanth/react_portfolio" rel="noopener noreferrer" target="_blank">
                    <Button colored>GitHub</Button>
                  </a>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.adslzone.net/app/uploads/2019/01/spotify-vs-youtube-music.jpg) center / cover'}} > Spotify and Youtube Automation </CardTitle>
                  <CardText>
                      <ul>
                          <li> Built a CLI service to add songs from a selected Youtube playlist to Spotify liked songs list using Youtube Data API and Spotify Web API </li>
                    </ul>
                </CardText>
                <CardActions border>
                  <a href="https://github.com/dhanraj-vedanth/spotify_python_automation" rel="noopener noreferrer" target="_blank">
                    <Button colored>GitHub</Button>
                  </a>
                </CardActions>
            </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/8a/1f/9c/8a1f9c75197d7a9b1463bda9133b58c9.png) center / cover'}} > Xinu </CardTitle>
                  <CardText>
                      <ul>
                          <li>Implemented a robust ’exponential-distribution’ scheduler and ’Linux-Like’ scheduler to overcome starvation </li>
                          <li>Accomplished memory virtualization through demand paging using swapping algorithms: Second Chance and Aging </li> 
                          <li>Designed a reader/writer lock and overcame the priority inversion problem through priority-inheritance</li>
                    </ul>
                </CardText>
                <CardActions border>
                  <a href="https://github.com/dhanraj-vedanth/Xinu" rel="noopener noreferrer" target="_blank">
                      <Button colored>GitHub</Button>
                  </a>
                </CardActions>
            </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Virtualization</Tab>
          <Tab>Socket Programming</Tab>
          <Tab>Software Engineering</Tab>
          <Tab>Operating Systems</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;