import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${props => props.black ? 'black' : 'none'};
  color: ${props => props.black ? 'white' : 'black'};
  border: 1px solid #333;
  border-radius: 6px;
  font-size: 16px;
  padding: 5px 10px;
  text-decoration: none; 
`;