import React from "react";
import { FormItemWrapper, Label, Input } from "./style";

const FormItem = ({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  handleOnChange,
}) => (
  <FormItemWrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  </FormItemWrapper>
);

export default FormItem;
