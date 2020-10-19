import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsList from "containers/Products/List";
import ProductsForm from "containers/Products/Form";
import Nav from "components/Nav";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  margin: 40px 40px;
`;
// TODO: Add better RWD
function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Content>
          <Route path="/" exact component={ProductsList} />
          <Route path="/add" exact component={ProductsForm} />
        </Content>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
