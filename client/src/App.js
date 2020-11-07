import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "containers/Dashboard/index";
import ProductsForm from "containers/Products/Form";
import styled from "styled-components";
import Decks from 'containers/Decks/Decks.tsx'
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
    <Dashboard>
      <BrowserRouter>
        <Route path="/" exact component={()=> <div>dzik</div> } />
        <Route path="/decks" exact component={Decks} />
        <Route path="/stats" exact component={()=> <div>stats</div> } />
      </BrowserRouter>
    </Dashboard>

  );
}

export default App;
