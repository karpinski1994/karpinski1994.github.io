import React, { Component } from "react";
import { mapValues, groupBy } from "lodash";
import { connect } from "react-redux";
import { fetchProd, removeProd } from "actions";
import shortid from "shortid";
import Tabs from 'components/Tabs/TabButton'
import { StandardTabs } from "components/Tabs/standard";
import Product from "components/Product";
import styled from 'styled-components'

import Slider from 'components/Slider/index'

export const Panel = styled.div`
  box-shadow: 0px 6px 22px -1px rgba(0,0,0,0.75);
  height: 210px;
  width: 510px;
  padding: 25px;
`
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
    const onFirstChange = () => {
      console.log('first change')
    }
    const onSecondChange = () => {
      console.log('second change')
    }
    return (
      <Panel>
        <Tabs products={products} removeProduct={removeProd} />
        <StandardTabs items={items} />
        {/* <Slider onChange={onFirstChange} label='Percentages' min={0} max={100} step={1} value={30} unit='%' preciseButons/>
        <Slider onChange={onSecondChange} label='Units' min={0} max={1} step={0.1} value={0.5} unit='p' /> */}
      </Panel>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state)
  return { products: state.prds.productsList };
};

export default connect(mapStateToProps, {
  fetchProd,
  removeProd,
})(Products);
