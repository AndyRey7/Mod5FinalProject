import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect} from "react-router-dom";

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
  handleClick = () =>{
    if (window.confirm("Are you sure you want log out?")) {
      this.props.handleLogout();
    }
  }

  handleClickedLink = (location) => {
    this.props.history.push(location);
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <Navbar  color="dark" light expand="md">
          <NavbarBrand className="link" onClick={() => this.handleClickedLink('/')} >
              <span className="nav-titles">WanderLust<i class="paper plane icon"></i></span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { Object.keys(this.props.user).length > 0 ?
              <>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="link" nav caret>
                  <span className="nav-titles">{this.props.user.name}</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem  className="link"  >
                  <NavLink onClick={() => this.handleClickedLink('/hotels')} >
                      Hotels
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem style={{backgroundColor: 'cyan', color:'white'}}  >
                    <NavItem onClick={this.handleClick}>
                      Log Out
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </>
              :
              <>
                <NavItem onClick={() => this.handleClickedLink('/login')} >
                  <NavLink className="link" >
                      <span className="nav-titles">Log In</span>
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => this.handleClickedLink('/signup')} >
                  <NavLink className="link" >
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
