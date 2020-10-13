import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  margin-left: 15px;
  background-color: black;
  font-size: 16px;
  color: white;
`;

const Button = ({title, callback}) => {
  return (
    <StyledButton onClick={() => callback()}>
      {title}
    </StyledButton>
  )
}

export default Button;

