import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsView from "containers/Products/View";
import ProductsForm from "containers/Products/Form";
import Nav from "components/Nav";
import styled from "styled-components";
import { Panel } from "containers/Products/View";
import Slider from "components/Slider";
import { Container } from '@material-ui/core';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  margin: 40px 40px;
`;
const onFirstChange = () => {
  console.log("first change");
};
const onSecondChange = () => {
  console.log("second change");
};
// TODO: Add better RWD
function App() {
  return (
    <BrowserRouter>
      <Container>

        <Nav />
        <Content>
          <Route path="/" exact component={ProductsView} />
          <Route path="/add" exact component={ProductsForm} />
        </Content>
      </Container>
    </BrowserRouter>
  );
}

export default App;
