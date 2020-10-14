import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsList from "containers/Products/List";
import ProductsForm from "containers/Products/Form";
import Nav from "components/Nav";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  flex-basis: 80%;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Content>
          <Route path="/list" exact component={ProductsList} />
          <Route path="/add" exact component={ProductsForm} />
        </Content>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
