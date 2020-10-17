import React from "react";
import { StyledButton } from "./style";

const Button = (props) => {

  return (
    <StyledButton onClick={props.clickHandler} black={props.black}>
      {props.title}
    </StyledButton>
  );
};

export default Button;
