import React from "react";
import * as ROUTES from "constants/routes";
import { LogInIcon, ListIcon, PlusIcon, Navigation, StyledLink } from "./style";

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
