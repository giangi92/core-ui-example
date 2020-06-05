import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../assets/img/brand/logo.svg'
import sygnet from '../assets/img/brand/sygnet.svg'


const Header = () => {
    return (
        <React.Fragment>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            {/* <AppNavbarBrand>


            </AppNavbarBrand> */}

            <h2 className="little-spacing">Giangisoft</h2>

            <Nav className="ml-auto" navbar>
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

                <UncontrolledDropdown nav direction="down">
                    <DropdownToggle nav>
                        <img src={'../../assets/img/avatars/100.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={e => null}><i className="fa fa-lock"></i> Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>

            {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}


        </React.Fragment>
    )
}

export default Header;