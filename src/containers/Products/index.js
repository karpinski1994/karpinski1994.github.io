import React, {Component} from "react";

import {connect} from "react-redux";
import {removeProduct, addProduct} from "actions";
import Tabs from 'components/Tabs';
import Form from 'containers/Form';

export class Products extends Component {
  render() {
    const {products, removeProduct, addProduct} = this.props;
    return <div>
      <Form addProduct={addProduct}/>
      <Tabs products={products} removeProduct={removeProduct}/>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {products: state.products};
};

export default connect(mapStateToProps, {
  removeProduct,
  addProduct,
})(Products);
