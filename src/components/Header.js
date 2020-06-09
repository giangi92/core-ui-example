import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import { AppSidebarToggler } from '@coreui/react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


const Header = (user) => {

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

                {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}
                {user.isLogged ?
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
            </Nav>
        </React.Fragment>
    )
}

export default Header;