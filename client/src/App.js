import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsView from "containers/Products/View";
import ProductsForm from "containers/Products/Form";
import Nav from "components/Nav";
import styled from "styled-components";
import { Panel } from "containers/Products/View";
import Slider from "components/Slider";

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
    // <BrowserRouter>
    //   <Wrapper>
    //     <Nav />
    //     <Content>
    //       <Route path="/" exact component={ProductsView} />
    //       {/* <Route path="/add" exact component={ProductsForm} /> */}
    //       {/* <Route path="/tabs" exact component={Standard}/> */}
    //     </Content>
    //   </Wrapper>
    // </BrowserRouter>
    <Wrapper>
      <Panel>
        <Slider
          onChange={onFirstChange}
          label="Percentages"
          min={0}
          max={100}
          step={1}
          value={30}
          unit="%"
          preciseButons
        />
        <Slider
          onChange={onSecondChange}
          label="Units"
          min={0}
          max={1}
          step={0.1}
          value={0.5}
          unit="p"
        />
      </Panel>
    </Wrapper>
  );
}

export default App;
