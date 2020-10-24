import React, { Component } from "react";
import { mapValues, groupBy } from "lodash";
import { connect } from "react-redux";
import { fetchProd, removeProd } from "actions";
import shortid from "shortid";
// import Tabs from "containers/Products/Tabs";
import { StandardTabs } from "components/Tabs/standard";
import Product from "components/Product";
// TODO: Here should be the whole logic connected to products and passed to generic tabs
export class Products extends Component {
  componentDidMount() {
    this.props.fetchProd();
  }

  getCategories = (products) => {
    return Object.entries(groupBy(products, "category")).map(
      (productArray) => ({
        title: productArray[0],
        products: productArray[1],
      })
    );
  };

  getCategoriesComponents = (categories) =>
    categories.map(({ title, products }) => ({
      title,
      contents: this.getProductsComponents(products),
    }));

  getAllProductsCategory = (products) => ({
    title: "All products",
    contents: this.getProductsComponents(products),
  });

  getProductsComponents = (products) =>
    products.map((p) => (
      <Product
        id={p._id}
        key={shortid.generate()}
        removeProduct={this.props.removeProd}
        {...p}
      />
    ));

  render() {
    const { products } = this.props;
    const categories = this.getCategories(products);
    const items = [
      this.getAllProductsCategory(products),
      ...this.getCategoriesComponents(categories),
    ];
    return (
      <div>
        {/* <Tabs products={products} removeProduct={removeProd} /> */}
        <StandardTabs items={items} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.prds.productsList };
};

export default connect(mapStateToProps, {
  fetchProd,
  removeProd,
})(Products);
