import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  outline: none;
  background-color: white;
  border-bottom: ${props => props.underline? '3px solid gold' : 'none'};
  &:first-child {
    margin-left: 0px;
  }
`;