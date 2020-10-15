import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${props => props.black ? 'black' : 'none'};
  color: ${props => props.black ? 'white' : 'black'};
  border: 1px solid #333;
  border-radius: 6px;
  font-size: 16px;
  padding: 5px 10px;
  text-decoration: none; 
`;

const Button = ({title, callback, black}) => {
  return (
    <StyledButton  onClick={() => callback()} black={black}>
      {title}
    </StyledButton>
  )
}

export default Button;

