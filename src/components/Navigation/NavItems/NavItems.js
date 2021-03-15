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

const NavItems = ({ mobile, clicked }) => {
  return (
    <Nav>
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/">
          Home
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/todos">
          Todos
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/login">
          Login
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/signup">
          Sign Up
        </NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
