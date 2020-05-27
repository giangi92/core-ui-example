import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../assets/img/brand/logo.svg'
import sygnet from '../assets/img/brand/sygnet.svg'


const Header = () => {
    return (
        <div>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <AppNavbarBrand full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
                minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}>

                <h2 class="little-spacing">Giangisoft</h2>

            </AppNavbarBrand>
            <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                    <Link to="/" className="nav-link" >Dashboard</Link>
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


        </div>
    )
}

export default Header;