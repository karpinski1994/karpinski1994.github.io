import React from "react";
import {Header} from './style';

const TabHeader = ({ title, underline, clickHandler }) => {
  return <Header underline={underline} onClick={clickHandler}>{title}</Header>;
};

export default TabHeader;
