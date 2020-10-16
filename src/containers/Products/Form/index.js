import React from 'react';
import FormItem from 'components/FormItem';
import Button from 'components/Button';

import { connect } from "react-redux";
import { removeProduct, addProduct, fetchProducts } from "actions";
import {FormWrapper} from './style';


const formConfig = [
  {id: 'name', label: 'Name', type: 'text', placeholder: 'Pinon Noire'},
  {id: 'description', label: 'Description', type: 'text', placeholder: 'Some description...'},
  {id: 'category', label: 'Category', type: 'text', placeholder: 'Other'},
];

const Form = ({addProduct, match, history, fetchProducts}) => {
  React.useEffect(()=> {
    // fetchProducts();
  }, [])

  const INIT_DATA = {
    name: '',
    description: '',
    category: '',
  }
  const [productData, setProductData] = React.useState({
    ...INIT_DATA
  });
  const handleOnClick = (e) => {
    e.preventDefault();
    addProduct({...productData});
    history.push('/');
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <FormWrapper>
        <h1>Add product</h1>
        <form>
          {formConfig.map((item) => (
            <FormItem
              key={item.id}
              handleOnChange={handleChange}
              id={item.id}
              type={item.type}
              label={item.label}
              placeholder={item.placeholder}
              value={productData[item.id]}
            />
          ))}

          <button onClick={(e) => handleOnClick(e)}>Add product</button>
        </form>
      </FormWrapper>
    </>
  );
};


const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, {
  addProduct,
  // fetchProducts
})(Form);