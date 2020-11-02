import React, { useState } from "react";
import styled from "styled-components";
import increase from "./increase";
import decrease from "./decrease";
import { createArrFromNumber } from "./utils";

const Wrapper = styled.div`
  font-size: 20px;
  text-align: center;
  > * {
    margin: 20px;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
`;

const Slider = styled.div`
  display: flex;
  width: 100%;
`;

const Step = styled.div`
  background-color: ${({ isHandler }) => (isHandler ? "red" : "orange")};
  width: ${({max, isHandler}) => isHandler ? '50px' : `calc((100% - 50px) / ${max})`};
  height: 30px;
`;

const Handler = styled.div`
  background-color: orange;
`;

const Score = styled.div`

`;

const Message = styled.div`

`;

const CustomSlider = () => {
  const [state, setQuantity] = useState({ quantity: 0 });
  const max = 100;
  const min = 0;

  const onDragStart = (e, id) => {
    // e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e, id) => {
    setQuantity((prevState) => ({
      ...prevState,
      message: "",
      quantity: id,
    }));
  };

  const onStepClick = (e, id) => {
    setQuantity((prevState) => ({
      ...prevState,
      message: "",
      quantity: id,
    }));
  };

  const onClickPlus = () => {
    setQuantity((prevState) =>
      increase({ previousQuantity: prevState.quantity, max: max })
    );
  };

  const onClickMinus = () => {
    setQuantity((prevState) =>
      decrease({ previousQuantity: prevState.quantity, min: min })
    );
  };

  return (
    <Wrapper>
      <SliderWrapper>
        <button onClick={onClickMinus}>-</button>
        {max && (
          <Slider>
            {createArrFromNumber(max + 1).map((id) => (
              <Step
                max={max}
                isHandler={id === state.quantity}
                onClick={(e) => onStepClick(e, id)}
                onDragStart={(e) => onDragStart(e, id)}
                onDragOver={(e) => onDragOver(e, id)}
                key={id}
              />
            ))}
          </Slider>
        )}
        <button onClick={onClickPlus}>+</button>
      </SliderWrapper>
      <Score>
        <Message>
          {state.quantity}
        </Message>
        <Message>
          {state.message}
        </Message>
      </Score>
    </Wrapper>
  );
};

export default CustomSlider;
