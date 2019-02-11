import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs className="nav">
          <NavItem>
            <NavLink href="/login" active>Login</NavLink>
          </NavItem>

          <NavItem className="tab">
            <NavLink href="/month">Month</NavLink>
          </NavItem>
          <NavItem className="tab">
            <NavLink href="/week">Week</NavLink>
          </NavItem>
          <NavItem className="tab">
            <NavLink  href="/tasks">Task</NavLink>
          </NavItem>
          <NavItem className="tab">
            <NavLink  href="/address">Address</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

