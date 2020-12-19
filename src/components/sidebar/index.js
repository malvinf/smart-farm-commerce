import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import {} from './style.css';

const Sidebar = () => {
  return (
    <div>
      <h2>Setting</h2>
      <Nav vertical className="mr-3">
        <NavItem>
          <NavLink href="/customer/:id">Update Profile</NavLink>
        </NavItem>
        <NavLink href="/customer/:id">Ubah Password</NavLink>
        <NavItem>
          <NavLink href="/customer/:id" className="text-danger">
            Delete Account
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
