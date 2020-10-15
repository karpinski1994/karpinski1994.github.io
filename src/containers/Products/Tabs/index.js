import React, { Component } from "react";
import shortid from 'shortid';
import styled from "styled-components";
import Product from "components/Product";
import { groupBy, isBuffer } from "lodash";

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h1`
`

export const TabHeader = styled.button`
  display: inline-block;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  outline: none;
  background-color: white;
  border-bottom: ${props => props.underline? '3px solid gold' : 'none'};
  &:first-child {
    margin-left: 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Nav = styled.div`
  display: flex;
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCat: null,
      categories: [],
      catTitles: [],
    };
  }

  componentDidMount() {
    this.setState({
      categories: this.getCategories(this.props.products),
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.setState({
        categories: this.getCategories(this.props.products),
      }, () => {
      });
    }
  }

  getCategories = (products) => {
    return {
      'All Products': products,
      ...groupBy(products, "category")
   };
  };

  choseTab = (tab) => {
    this.setState({
      chosenCat: tab,
    });
  };

  render() {
    let { categories, chosenCat } = this.state;
    let titles = [];
    let cats = [];
    let selectedCat = 'All products;'
    if (categories) {
       selectedCat = !chosenCat ? Object.keys(categories)[0] : chosenCat;

      titles = Object.keys(categories).map((title) => (
        <TabHeader key={shortid.generate()} onClick={() => this.choseTab(title)} underline={selectedCat === title}>
          {title || "other"}
        </TabHeader>
      ));
      if (
        categories &&
        categories[selectedCat] &&
        categories[selectedCat].length
      ) {
        cats = categories[selectedCat].map((prod) => {
          return <Product key={shortid.generate()} removeProduct={this.props.removeProduct} {...prod} />;
        });
      }
    }

    return (
      <TabsWrapper>
        <Nav>{titles.length && titles}</Nav>
        <CategoryTitle>{selectedCat || null}</CategoryTitle>
        <Content>{cats}</Content>
      </TabsWrapper>
    );
  }
}

export default Tabs;
