import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "constants/routes";
import styled from "styled-components";
import { List, PlusCircle, LogIn } from "react-feather";

const LogInIcon = styled(LogIn)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;

  &:hover {
    transition: all 0.5s;
    opacity: 1;
  }
`;

const ListIcon = styled(List)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const PlusIcon = styled(PlusCircle)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const Navigation = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
  overflow: hidden;
  width: 100px;
  background-color: #222;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
`;
const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 10px;
  height: 40px;
  width: 40px;
  &:hover ${ListIcon} {
    transition: all 0.5s;
    opacity: 0;
  }
   &:hover ${PlusIcon} {
    transition: all 0.5s;
    opacity: 0;
  }
`;

const Nav = () => (
  <Navigation>
    <StyledLink to={ROUTES.PRODUCTS_ADD}>
      <PlusIcon />
      <LogInIcon />
    </StyledLink>
    <StyledLink to={ROUTES.PRODUCTS_LIST}>
      <ListIcon />
      <LogInIcon />
    </StyledLink>
  </Navigation>
);

export default Nav;
