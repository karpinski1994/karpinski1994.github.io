import React, { Component } from "react";
import shortid from "shortid";
import Product from "components/Product";
import { groupBy } from "lodash";
import TabHeader from 'components/TabHeader';
import { TabsWrapper, Content, StyledNav } from "./style";
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
      this.setState(
        {
          categories: this.getCategories(this.props.products),
        },
        () => {}
      );
    }
  }

  getCategories = (products) => {
    return {
      "All Products": products,
      ...groupBy(products, "category"),
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
    let selectedCat = "All products;";
    if (categories) {
      const defaultCat = Object.keys(categories)[0];
      selectedCat = !chosenCat ? defaultCat : chosenCat;

      titles = Object.keys(categories).map((title) => (
        <TabHeader
          key={shortid.generate()}
          callback={() => this.choseTab(title)}
          underline={selectedCat === title}
          title={title || "other"}
        />
      ));
      if (
        categories &&
        categories[selectedCat] &&
        categories[selectedCat].length
      ) {
        cats = categories[selectedCat].map((prod) => {
          return (
            <Product
              key={shortid.generate()}
              removeProduct={this.props.removeProduct}
              {...prod}
            />
          );
        });
      }
    }

    return (
      <TabsWrapper>
        <StyledNav>{titles.length && titles}</StyledNav>
        <Content>{cats}</Content>
      </TabsWrapper>
    );
  }
}

export default Tabs;
