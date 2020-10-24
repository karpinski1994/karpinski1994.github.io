import React from "react";
import {Button} from './style';

const TabButton = (props) => {
  return <Button underline={props.isOpen} {...props}>{props.title}</Button>;
};

export default TabButton;
