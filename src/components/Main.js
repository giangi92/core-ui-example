import React, { Component } from 'react';
import BodyContent from './Employees';
import Header from './Header';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Sidebar from './Sidebar';

class CoreUserInterface extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="app sidebar-show aside-menu-show">
                        <header className="app-header navbar">
                            <Header />
                        </header>

                        <div className="app-body">
                            {/* <div className="sidebar">
                                { <Navigation /> }
                                 <Sidebar></Sidebar>
                            </div> */}
                            <main className="main space-allaround">
                                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                                <Switch>
                                    <Route path="/about">
                                        <About></About>
                                    </Route>
                                    <Route path="/users">
                                        <BodyContent />
                                    </Route>
                                    <Route path="/">
                                        <Homepage></Homepage>
                                    </Route>
                                </Switch>

                            </main>

                        </div>
                        <footer className="app-footer">
                        </footer>
                    </div>
                </Router>
            </div>
        )
    }
}

export default CoreUserInterface;