import React from "react";
import shortid from "shortid";
import { InputWrapper, StyledInput, Label, Error } from "./style";

const Input = ({
  id,
  label,
  type = "text",
  value,
  changeHandler,
  invalid,
  touched,
  errors,
  config,
}) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        type={type}
        value={value}
        onChange={changeHandler}
        invalid={invalid}
        touched={touched}
        {...config}
      />
      <div>
        {/* TODO: Add some transition using ReactCSSTransitionGroup */}
        {errors &&
          errors.map((err) => <Error key={shortid.generate()}>{err}</Error>)}
      </div>
    </InputWrapper>
  );
};

export default Input;
