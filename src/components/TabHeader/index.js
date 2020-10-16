import React from "react";
import {Header} from './style';

const TabHeader = ({ title, underline, callback }) => {
  return <Header underline={underline} onClick={callback}>{title}</Header>;
};

export default TabHeader;
