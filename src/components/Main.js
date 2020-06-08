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
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


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

    useEffect(() => {
        console.log('update del main!!!!');
        const user = localStorage.getItem('user') || undefined;
        const isCorrect = TokenChecker();

        setLogged(user && isCorrect);
    })

    return (
        <div className="app">
            <Router>
                {/* {!sessionStatus || (sessionStatus && jwt.verify(sessionStatus))}
                    <Redirect to='/login'></Redirect> */}
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
                            {/* <React.Fragment>
                                <UncontrolledDropdown nav direction="down">
                                    <DropdownToggle nav>
                                        <img src={'../../assets/img/avatars/100.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={e => null}><i className="fa fa-lock"></i> Logout</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </React.Fragment> */}
                            {logged ?
                                <UncontrolledDropdown nav direction="down">
                                    <DropdownToggle nav>
                                        <img src={'../../assets/img/avatars/100.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={e => null}><i className="fa fa-lock"></i> Logout</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                :
                                <UncontrolledDropdown nav direction="down">
                                    <DropdownToggle nav>
                                        <img src={'../../assets/img/avatars/0.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={e => null}><i className="fa fa-lock"></i> Login</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            }
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
                                    <TokenCheckerRedirect uri="users"></TokenCheckerRedirect>
                                    <BodyContent />
                                </Route>

                                <Route path="/dashboard">
                                    <TokenCheckerRedirect uri="dashboard"></TokenCheckerRedirect>
                                    <Homepage></Homepage>
                                    {/* {setLogged(true)} */}
                                </Route>
                                <Route path="/">
                                    <UserLogin />
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