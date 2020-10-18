import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-bottom: 2%;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  padding: 10px 0;
  :first-letter {
    text-transform:capitalize;
  } 
`;

export const StyledInput = styled.input`
  flex-basis: 60%;
  border: 0;
  font-size: inherit;
  border-radius: 5px;
  padding: 10px;
  border: ${({invalid, touched}) => invalid || !touched ? '1px solid red' : '1px solid lightGrey'}
`;

export const Error = styled.p`
  color: red;
`;