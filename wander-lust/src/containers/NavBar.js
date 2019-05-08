import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popup } from 'semantic-ui-react'
import '../App.css'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleClick = () => {
    if (window.confirm("Are you sure you want log out?")) {
      this.props.handleLogout();
    }
  }

  handleClickedLink = (routePath) => {
    this.props.history.push(routePath);
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#35687d', color:'#ccc'}} light expand="md">
          <NavbarBrand onClick={() => this.handleClickedLink('/')} >
              <span className="nav-titles">WanderLust <i className="fas fa-globe-asia"></i></span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { Object.keys(this.props.user).length > 0 ?
              <>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="nav-titles">{this.props.user.name}</span>
                </DropdownToggle>
                <DropdownMenu right style={{backgroundColor: '#ead5c0'}}>
                  <DropdownItem  >
                  <NavLink onClick={() => this.handleClickedLink('/hotels')}>
                      <Popup trigger={<i id="icons" className="fas fa-hotel"></i>}
                      content={<span className="navFont">Hotels</span>}
                      position='left center'
                      />
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink onClick={() => this.handleClickedLink('/rooms')}>
                      <Popup trigger={<i id="icons" className="fas fa-bed"></i>}
                      content={<span className="navFont">Rooms</span>}
                      position='left center'
                      />
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink onClick={() => this.handleClickedLink('/profile')}>
                      <Popup trigger={<i id="icons" className="fas fa-address-card"></i>}
                      content={<span className="navFont">Profile</span>}
                      position='left center'
                      />
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem style={{backgroundColor: '#35687d', color:'#ccc'}}>
                    <NavItem onClick={this.handleClick}>
                    <Popup trigger={<i id="signout" className="fas fa-sign-out-alt"></i>}
                    content={<span className="navFont">Log Out</span>}
                    position='left center'
                    />
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </>
              :
              <>
                <NavItem onClick={() => this.handleClickedLink('/login')}>
                  <NavLink>

                      <span className="nav-titles">Log In <i className="fas fa-sign-out-alt"></i></span>
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => this.handleClickedLink('/signup')}>
                  <NavLink>
                      <span className="nav-titles">Sign Up <i className="fas fa-user-plus"></i></span>
                  </NavLink>
                </NavItem>
              </>
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
