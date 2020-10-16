import React from "react";
import { StyledButton } from "./style";

const Button = ({ title, callback, black }) => {
  return (
    <StyledButton onClick={() => callback()} black={black}>
      {title}
    </StyledButton>
  );
};

export default Button;
