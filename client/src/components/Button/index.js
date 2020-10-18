import React from "react";
import { StyledButton } from "./style";

const Button = ({ clickHandler, black, title }) => (
  <StyledButton onClick={clickHandler} black={black}>
    {title}
  </StyledButton>
);

export default Button;
