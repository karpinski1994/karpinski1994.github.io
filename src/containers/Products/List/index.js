import React, { Component } from "react";

import { connect } from "react-redux";
import { removeProduct, addProduct, fetchProducts } from "actions";
import Tabs from "containers/Products/Tabs";

export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, removeProduct, addProduct } = this.props;
    return (
      <div>
        <Tabs products={products} removeProduct={removeProduct} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, {
  removeProduct,
  addProduct,
  fetchProducts,
})(Products);
