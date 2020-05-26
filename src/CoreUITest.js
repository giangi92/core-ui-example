import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, ModalHeader, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import image from './assets/img/brand/sygnet.svg';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
//import DataRetriever from './components/DataRetriever';

class PopoverItem extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen,
        });
    }

    render() {
        return (
            <span>
                <Button className="btn btn-lg btn-danger" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
                    {this.props.item.text}
                </Button>
                <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle} trigger="legacy" delay={0}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                </Popover>
            </span>
        );
    }
}

class Modals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }


    render() {
        return (
            <div className="animated fadeIn">
                <Button onClick={this.toggle} className="btn btn-primary">Launch demo modal</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

/** ELEMENTI PER LA LINE-CHART */
const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  }

  class LineChart extends Component {
    render() {
      return (
        <div className="animated fadeIn">
            <Card>
              <CardHeader>
                Line Chart
                <div className="card-header-actions">
                  <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line} options={options} />
                </div>
              </CardBody>
            </Card>
        </div>
      );
    }
  }

const ExampleContainer = () => {
    return (
        <div>
            <div className="app sidebar-fixed sidebar-show">
                <header className="app-header navbar">
                    {/* <!-- Header content here --> */}
                    <h1>HEADER</h1>
                </header>
                <div className="app-body">
                    <div className="sidebar">
                        {/* <!-- Sidebar content here --> */}
                        <p className="nav-item">ITEM_1</p>
                        <p className="nav-item">ITEM_2</p>
                        <p className="nav-item">ITEM_3</p>
                    </div>
                    <main className="main">
                        {/* <!-- Main content here --> */}
                        <h3>CONTENUTO PRINCIPALE</h3>

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    1/2
                            </div>
                                <div className="col">
                                    1/2
                            </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    1/3
                            </div>
                                <div className="w-100"></div>
                                <div className="col">
                                    1/3
                            </div>
                                <div className="col">
                                    1/3
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-9">
                                    Level 1: .col-sm-9
                            <div className="row">
                                        <div className="col-8 col-sm-6">
                                            Level 2: .col-8 .col-sm-6
                                    </div>
                                        <div className="col-4 col-sm-6">
                                            Level 2: .col-4 .col-sm-6
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 80 + 'px' }, { marginBottom: 80 + 'px' }}></div>
                        <div className="media">
                            <img className="mr-3" src={image} alt="Generic placeholder"></img>
                            <div className="media-body">
                                <h5 className="mt-0">Media heading</h5>
                                Cras sit amet nibh libero, in gravida nulla.<br></br> Nulla vel metus scelerisque ante sollicitudin.<br></br> Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>

                        <div style={{ marginTop: 80 + 'px' }, { marginBottom: 80 + 'px' }}></div>{/*<!-- spazio -->*/}

                        <div className="alert alert-primary" role="alert">
                            It's primary alert!
                        </div>
                        <div className="alert alert-secondary" role="alert">
                            It's secondary alert!
                        </div>
                        <div className="alert alert-success" role="alert">
                            It's success alert!
                        </div>
                        <div className="alert alert-danger" role="alert">
                            It's danger alert!
                        </div>
                        <div className="alert alert-warning" role="alert">
                            It's warning alert!
                        </div>
                        <div className="alert alert-info" role="alert">
                            It's info alert!
                        </div>
                        <div className="alert alert-light" role="alert">
                            It's light alert!
                        </div>
                        <div className="alert alert-dark" role="alert">
                            It's dark alert!
                        </div>

                        <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">Well done!</h4>
                            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                            <hr></hr>
                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                        </div>

                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <button type="button" className="btn btn-primary">
                            Notifications <span className="badge badge-light">4</span>
                        </button>

                        <span className="badge badge-primary">Primary</span>
                        <span className="badge badge-secondary">Secondary</span>
                        <span className="badge badge-success">Success</span>
                        <span className="badge badge-danger">Danger</span>
                        <span className="badge badge-warning">Warning</span>
                        <span className="badge badge-info">Info</span>
                        <span className="badge badge-light">Light</span>
                        <span className="badge badge-dark">Dark</span>

                        {/**callout */}
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="callout callout-info">
                                    <small className="text-muted">New Clients</small><br />
                                    <strong className="h4">9,123</strong>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="callout callout-danger">
                                    <small className="text-muted">Recuring Clients</small><br />
                                    <strong className="h4">22,643</strong>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="callout callout-warning">
                                    <small className="text-muted">Pageviews</small><br />
                                    <strong className="h4">78,623</strong>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="callout callout-success">
                                    <small className="text-muted">Organic</small><br />
                                    <strong className="h4">49,123</strong>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="callout">
                                    <small className="text-muted">CTR</small><br />
                                    <strong className="h4">23%</strong>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="callout callout-primary">
                                    <small className="text-muted">Bounce Rate</small><br />
                                    <strong className="h4">5%</strong>
                                </div>
                            </div>
                        </div>
                        {/** card */}
                        <div className="card" style={{ width: 18 + 'rem' }}>
                            <img className="card-img-top" src={image} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div style={{ marginTop: 80 + 'px' }, { marginBottom: 80 + 'px' }}></div>{/*<!-- spazio -->*/}

                        {/* <!-- Button trigger modal --> */}
                        {/* <!-- Modal --> */}
                        <Modals></Modals>

                        {/* <button type="button" id="Popover1" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" onClick={true} data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> */}
                        <PopoverItem key={1} item={{
                            placement: 'bottom',
                            text: 'Click to toggle popover',
                        }} id={1}></PopoverItem>

                        <div style={{ marginTop: 80 + 'px' }, { marginBottom: 80 + 'px' }}></div>{/*<!-- spazio -->*/}

                        <LineChart></LineChart>
                    </main>
                    {/* <aside className="aside-menu">
                    {/* <!-- Aside menu content here --> */}
                    {/* <h3>MENU A LATO</h3>
                </aside> */}
                </div>
                <footer className="app-footer">
                    {/* <!-- Footer content here --> */}
                    <p>FOOTER</p>
                </footer>
            </div>

        </div>
    )
}

export default ExampleContainer;