import React from "react";
import styled from "styled-components";

export const Header = styled.button`
  display: inline-block;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  outline: none;
  &:first-child {
    margin-left: 0px;
  }
`;
const TabHeader = ({ title }) => {
  return <Header>{title}</Header>;
};

export default TabHeader;
