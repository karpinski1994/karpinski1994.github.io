
export const isFieldValid = (field, { required, minLength, maxLength }) => {
  let isValid = true;
  let errors = [];
  if (required) {
    isValid = field.value.trim() !== "" && isValid;    
    if(!field.touched || field.value.trim() === "") {
      errors.push('Field is required')
    }
  }

  if (minLength) {
    isValid = field.value.length >= minLength && isValid;
    if(field.value.length < minLength) {
      errors.push(`Field's length must be bigger than ${minLength}`)
    }
  }

  if (maxLength) {
    isValid = field.value.length <= maxLength && isValid;
     if(field.value.length > minLength) {
      errors.push(`Field's length must be lower than ${maxLength}`)
    }
  }
  // TODO: it could be done in better way for ex basing on errors without isvalid prop
  return {
    isValid,
    errors
  };
};
