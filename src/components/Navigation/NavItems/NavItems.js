import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked, loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/">
          Home
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/contacts">
          Contacts
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/logout">
          Logout
        </NavItem>
      </Ul>
    );
  } else {
    links = (
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/login">
          Login
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/signup">
          Sign Up
        </NavItem>
      </Ul>
    );
  }

  return <Nav>{links}</Nav>;
};

export default NavItems;
