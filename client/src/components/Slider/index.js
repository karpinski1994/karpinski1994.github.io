import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { createArrFromNumber, decrease, increase } from "./utils";

const sliderBtnWidth = 72;
const sliderBtnHeight = 27;
const sliderRadius = 27;
const bgColor = '#aaa';

const PrecisionBtn = styled.button`
  height: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: ${sliderBtnHeight}px;
  text-align: center;
  > * {
    margin: 20px;
  }
`;
// TODO: adjust shadows of background and button (left-right)
const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  background-color: ${bgColor};
  border-radius: ${sliderRadius}px;
`;

const Slider = styled.div`
  display: flex;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;
// TODO: Change slider's logic to move csses only nad numbers without re-rendering everything
const Step = styled.div`
  /* TODO: set propper css property for selecting button as a whole */

  user-select: all;
  background-color: ${({ isHandler }) => (isHandler ? "white" : null)};
  border: ${({ isHandler }) => (isHandler ? `1px solid ${bgColor}`: null)};
  border-radius: ${sliderRadius}px;
  // TODO: Center position of clicked step
  width: ${({ max, step, isHandler }) =>
    isHandler
      ? sliderBtnWidth + "px"
      // TODO: improve calculation of width (with steps and max)
      : `calc((100% - ${sliderBtnWidth}px) / (${max}) / ${step})`};
`;

const Handler = styled.div`
  background-color: orange;
`;

const Score = styled.div``;

const Message = styled.div``;

const CustomSlider = ({ label, max, min, step, value, unit, onChange, preciseButons }) => {
  const [state, setQuantity] = useState({ quantity: 0 });

  useEffect(() => {
    setQuantity({quantity: value})
  }, []);

  useEffect(() => {
    onChange();
  }, [state.quantity]);

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
  // TODO: Center position of clicked step
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

  const steps = useMemo(() =>
    createArrFromNumber(max + 1).map((id) => {
      const isHandler = id === state.quantity;
      return (
        <Step
          step={step}
          max={max}
          isHandler={isHandler}
          onClick={(e) => onStepClick(e, id)}
          onDragStart={(e) => onDragStart(e, id)}
          onDragOver={(e) => onDragOver(e, id)}
          key={id}
        >
          {isHandler ? state.quantity + ` ${unit ? ` ${unit}` : null}` : null}
        </Step>
      );
    })
  );

  return (
    <Wrapper>
      <Row>
        {preciseButons && <PrecisionBtn onClick={onClickMinus}>-</PrecisionBtn>}
        <SliderWrapper>{max && <Slider>{steps}</Slider>}</SliderWrapper>
        {preciseButons && <PrecisionBtn onClick={onClickPlus}>+</PrecisionBtn>}
      </Row>
      <Score>
        <Message>{state.quantity}</Message>
        <Message>{state.message}</Message>
      </Score>
    </Wrapper>
  );
};
// TODO: Prevent rerendering each step, maybe some memoization,
// TODO: Rerender only steps that change by using sliding window technique
// TODO: Change slider's logic to move csses only nad numbers without re-rendering everything
export default CustomSlider;
