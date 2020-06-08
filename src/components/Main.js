import React, { Component, Suspense } from 'react';
import BodyContent from './Employees';
import Header from './Header';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import UserLogin from './UserLogin';
import jwt from 'jsonwebtoken';
import {
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppFooter,
    AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

// sidebar nav config

const navigation =
{
    items: [
        {
            name: 'Dashboard',
            url: '/',
            icon: 'icon-speedometer',
            badge: {
                variant: 'success',
                text: 'NEW',
            },
        },
        {
            name: 'Utenti',
            url: '/users',
            icon: 'icon-user',
            badge: {
                variant: 'info'

            },
        },
        {
            name: 'Info',
            url: '/about',
            icon: 'icon-question',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
        {
            name: 'Impostazioni',
            url: '/about',
            icon: 'icon-settings',
            badge: {

                text: 'VECCHIO',
            },
        }
    ]
}

class CoreUserInterface extends Component {

    render() {

        const sessionStatus = localStorage.getItem('sessionToken');
        // console.log('Stato della sessione', jwt.verify(sessionStatus));


        return (
            <div className="app">
                <Router>
                    {/* {!sessionStatus || (sessionStatus && jwt.verify(sessionStatus))}
                    <Link to='/login'>
                    </Link> */}
                    {/* <Route path="/login">
                            <UserLogin />
                        </Route> */}

                    <div>
                        {/* <header className="app-header navbar">
                            <Header />
                        </header> */}
                        <AppHeader fixed>
                            <Suspense>
                                <Header />
                            </Suspense>
                        </AppHeader>

                        <div className="app-body">
                            {/* <div className="sidebar">
                                { <Navigation /> }
                                 <Sidebar></Sidebar>
                            </div> */}
                            <AppSidebar fixed display="lg">
                                <AppSidebarHeader />
                                <AppSidebarForm />
                                <Suspense>
                                    <AppSidebarNav navConfig={navigation} router={router} />
                                </Suspense>
                                <AppSidebarFooter />
                                <AppSidebarMinimizer />
                            </AppSidebar>
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
                            Giangisoft® - All rights reserved
                        </footer>
                        {/* <AppFooter>
                                <Suspense>
                                    Giangisoft® - All rights reserved
                                    </Suspense>
                            </AppFooter> */}
                    </div>
                </Router>
            </div>
        )
    }
}

export default CoreUserInterface;