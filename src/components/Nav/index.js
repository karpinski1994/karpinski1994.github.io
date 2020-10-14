import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "constants/routes";
import styled from "styled-components";

const Navigation = styled.nav`
  flex-basis: 10%;
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
  display: block;
  padding: 10px;
`;

const Nav = () => (
  <Navigation>
    <StyledLink to={ROUTES.PRODUCTS_ADD}>Add product</StyledLink>
    <StyledLink to={ROUTES.PRODUCTS_LIST}>Products List</StyledLink>
  </Navigation>
);

export default Nav;
