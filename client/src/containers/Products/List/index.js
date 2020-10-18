import React, { Component } from "react";

import { connect } from "react-redux";
import { removeProductAction, fetchProducts } from "actions";
import Tabs from "containers/Products/Tabs";

// TODO: Here should be the whole logic connected to products and passed to generic tabs
export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, removeProductAction } = this.props;
    return (
      <div>
        <Tabs products={products} removeProduct={removeProductAction} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
console.log('state: ', state);
  return { products: state.products };
};

export default connect(mapStateToProps, {
  removeProductAction,
  fetchProducts,
})(Products);
