import React from 'react';
import styled from 'styled-components';
import FormItem from 'components/FormItem';
import Button from 'components/Button';


import { connect } from "react-redux";
import { removeProduct, addProduct, fetchProducts } from "actions";

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

// const SubmitButton = styled(Button)`
//   background: blue;
//   margin: 2% 0;
// `;

const formConfig = [
  {id: 'name', label: 'Name', type: 'text', placeholder: 'Pinon Noire'},
  {id: 'description', label: 'Description', type: 'text', placeholder: 'Some description...'},
  {id: 'category', label: 'Category', type: 'text', placeholder: 'Other'},
];

const Form = ({addProduct, match, history, fetchProducts}) => {
  React.useEffect(()=> {
    fetchProducts();
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
    console.log('productData: ', productData)
    addProduct({...productData});
    setProductData({
      ...INIT_DATA
    })
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

          <button onClick={(e) => handleOnClick(e)}>
            Add Item
          </button>
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
  fetchProducts
})(Form);