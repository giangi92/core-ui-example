import React, { useState, useEffect, Suspense } from 'react';
import BodyContent from './Employees';
import Header from './Header';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import UserLogin from './UserLogin';
import { Redirect } from 'react-router';
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
import TokenCheckerRedirect, { TokenChecker } from './TokenChecker';

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

const CoreUserInterface = () => {

    const [logged, setLogged] = useState(false);
    const [loggedUser, setLoggedUser] = useState(undefined);

    useEffect(() => {
        
        const isCorrect = TokenChecker();

        setLogged(loggedUser && isCorrect);
    })

    return (
        <div className="app">
            <Router>
                <div>
                    <AppHeader fixed>
                        <Suspense>
                            <Header isLogged={logged} setLogged={setLogged} />
                        </Suspense>
                    </AppHeader>

                    <div className="app-body">

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
                                    <TokenCheckerRedirect uri="users"></TokenCheckerRedirect>
                                    <BodyContent loggedUser={loggedUser}/>
                                </Route>

                                <Route path="/dashboard">
                                    <TokenCheckerRedirect uri="dashboard"></TokenCheckerRedirect>
                                    <Homepage></Homepage>
                                    {/* {setLogged(true)} */}
                                </Route>
                                <Route path="/">
                                    <UserLogin isLogged={setLogged} setLoggedUser={setLoggedUser} />
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

export default CoreUserInterface;