import React, { Component } from "react";

import { connect } from "react-redux";
import { removeProduct, addProduct, fetchProducts } from "actions";
import Tabs from "components/Tabs";
import Form from "containers/Form";

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, removeProduct, addProduct } = this.props;
    return (
      <div>
        <Form addProduct={addProduct} />
        <Tabs products={products} removeProduct={removeProduct} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
console.log('state: ', state);
  
  return { products: state.products };
};

export default connect(mapStateToProps, {
  removeProduct,
  addProduct,
  fetchProducts,
})(Products);
