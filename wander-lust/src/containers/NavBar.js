import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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
              <span className="nav-titles">WanderLust<i className="paper plane icon"></i></span>
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
                      Hotels
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink onClick={() => this.handleClickedLink('/rooms')}>
                      Rooms
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink onClick={() => this.handleClickedLink('/profile')}>
                      Your Profile
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem style={{backgroundColor: '#35687d', color:'#ccc'}}>
                    <NavItem onClick={this.handleClick}>
                      Log Out
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </>
              :
              <>
                <NavItem onClick={() => this.handleClickedLink('/login')}>
                  <NavLink>
                      <span className="nav-titles">Log In</span>
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => this.handleClickedLink('/signup')}>
                  <NavLink>
                      <span className="nav-titles">Sign Up</span>
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
