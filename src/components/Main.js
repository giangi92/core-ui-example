import React, { Component, Suspense } from 'react';
import BodyContent from './Employees';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import UserLogin from './UserLogin';
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
            url: '/dashboard',
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
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route path="/login">
                            <UserLogin />
                        </Route>
                        
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


                                    <Route path="/about">
                                        <About></About>
                                    </Route>
                                    <Route path="/users">
                                        <BodyContent />
                                    </Route>

                                    <Route path="/dashboard">
                                        <Homepage></Homepage>
                                    </Route>

                                </main>

                            </div>

                            <AppFooter>
                                <Suspense>
                                    Giangisoft® - All rights reserved
                            </Suspense>
                            </AppFooter>
                            {/* <footer className="app-footer">
                            Giangisoft® - All rights reserved
                        </footer> */}
                        </div>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default CoreUserInterface;