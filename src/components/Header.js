import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import { AppSidebarToggler } from '@coreui/react';



const Header = () => {

    return (
        <React.Fragment>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            {/* <AppNavbarBrand>


            </AppNavbarBrand> */}

            <h2 className="little-spacing">Giangisoft</h2>

            <Nav className="ml-auto" navbar>
                <NavItem className="px-3">
                    <Link to="/dashboard" className="nav-link" >Dashboard</Link>
                </NavItem>
                <NavItem className="px-3">
                    <Link to="/users" className="nav-link">Users</Link>
                </NavItem>
                <NavItem className="px-3">
                    <Link to="/about" className="nav-link">About</Link>
                </NavItem>
                <NavItem className="px-3">
                    <Link to="#" className="nav-link">Settings</Link>
                </NavItem>

            </Nav>

            {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}


        </React.Fragment>
    )
}

export default Header;