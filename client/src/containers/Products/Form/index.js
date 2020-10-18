import React, { Component } from "react";

import { connect } from "react-redux";
import { removeProduct, addProductAction, fetchProducts } from "actions";
import { FormWrapper } from "./style";
import Input from "components/Input";
import Button from "components/Button";
import { isFieldValid } from "./validation";

// TODO: Handle adding the same product twice
class ProductForm extends Component {
  state = {
    isFormValid: false,
    loading: false,
    productForm: {
      name: {
        config: {
          type: "text",
          placeholder: "Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
        errors: [],
      },
      category: {
        config: {
          type: "text",
          placeholder: "Category",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
        errors: [],
      },
      description: {
        config: {
          type: "text",
          placeholder: "Description",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
        errors: [],
      },
    },
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { isFormValid } = this.state;
    this.setState({ loading: true });
    const formData = {};
    for (let fieldId in this.state.productForm) {
      formData[fieldId] = this.state.productForm[fieldId].value;
    }
    console.log('formData: ', formData)
    this.props.addProductAction(formData)
    // TODO: Probably post to json can be handled by axios
  };

  changeHandler = (event, id) => {
    const productForm = {
      ...this.state.productForm,
    };
    const field = {
      ...productForm[id],
    };
    field.value = event.target.value;
    const { isValid, errors } = isFieldValid(field, field.validation);
    field.errors = errors;
    field.valid = isValid;
    field.touched = true;
    productForm[id] = field;

    let isFormValid = true;
    for (let id in productForm) {
      isFormValid = productForm[id].valid && isFormValid;
    }
    this.setState({ productForm, isFormValid });
  };

  render() {
    const formFields = [];
    for (let key in this.state.productForm) {
      formFields.push({
        id: key,
        config: this.state.productForm[key],
      });
    }
    let form = (
      <form onSubmit={this.submitHandler}>
        {formFields.map((field) => {
          return (
            <Input
              key={field.id}
              label={field.id}
              config={field.config.config}
              value={field.config.value}
              invalid={!field.config.valid}
              touched={field.config.touched}
              errors={field.config.errors}
              changeHandler={(e) => this.changeHandler(e, field.id)}
            />
          );
        })}
        <Button title="Add product" />
      </form>
    );
    // TODO: Add some loading animation
    // if ( this.state.loading ) {
    //     form = <Loading/>;
    // }
    return (
      <FormWrapper>
        <h1>Add Product</h1>
        {form}
      </FormWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, {
  addProductAction,
  // fetchProducts
})(ProductForm);
