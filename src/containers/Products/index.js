import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {removeProduct} from "actions";
import {groupBy} from 'lodash';

const StyledButton = styled.button`
  margin-left: 15px;
  background-color: black;
  font-size: 16px;
  color: white;
`;

export class Products extends Component {
  render() {
    const {products, removeProduct} = this.props;
    const productsMarkup = products.map((p) => (
      <div key={p.name}>
        Name: {p.name}
        <StyledButton onClick={() => removeProduct(p.name)}>
          Delete
        </StyledButton>
      </div>
    ));
    return <div>{products && productsMarkup}</div>;
  }
}

const mapStateToProps = (state) => {
  const grouped = groupBy(state.products, 'category');
  console.log('grouped: ', grouped);
  return {products: state.products};
};

export default connect(mapStateToProps, {
  removeProduct,
})(Products);
