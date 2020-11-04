import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import * as utils from "./utils";

// THEMING
const sliderBtnWidth = 72;
const sliderBtnHeight = 27;
const sliderRadius = 27;
const bgColor = "#aaa";
const boxShadow = "0px 2px 8px -4px rgba(0,0,0,0.75)";

interface StyledProps {
  isHandler?: boolean;
  stepsQuantity?: number;
}

interface Props {
  label: string;
  max: number;
  min: number;
  step: number;
  value: number;
  unit?: string;
  onChange(): any;
  preciseButons?: boolean;
}

const Label = styled.div`
  text-align: left;
  font-weight: bold;
  margin: 5px 0;
`;

const PrecisionBtn = styled.button`
  box-shadow: ${boxShadow};
  background-color: white;
  border: 1px solid ${bgColor};
  border-radius: 50%;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0 5px;
  height: ${sliderBtnHeight}px;
  width: calc(${sliderBtnHeight}px + 3px);
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  max-width: 100%;
  text-align: center;
  /* TODO: it shouldnt be done like this */
  height: 92px;
`;
// TODO: adjust shadows of background and button (left-right)
const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: ${sliderBtnHeight}px;
  background: rgb(230, 230, 230);
  background: linear-gradient(
    0deg,
    rgba(230, 230, 230, 1) 0%,
    rgba(201, 201, 201, 1) 83%,
    rgba(171, 171, 171, 1) 100%
  );
  border: 1px solid ${bgColor};
  border-radius: ${sliderRadius}px;
  overflow: hidden;
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
// TODO: Remove selecting text when clicked
const Step = styled.div<StyledProps>`
  /* TODO: set propper css property for selecting button as a whole */
  user-select: all;
  box-shadow: ${({ isHandler }) =>
    isHandler ? boxShadow : null};
  background-color: ${({ isHandler }) => (isHandler ? "white" : null)};
  margin: ${({ isHandler }) => (isHandler ? `1.5px` : null)};
  border-radius: ${sliderRadius}px;
  // TODO: Center position of clicked step
  width: ${({ stepsQuantity, isHandler }) =>
    isHandler ? `${sliderBtnWidth}px` : `calc(100% / ${stepsQuantity})`};
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Score = styled.div``;

const Message = styled.div`
  margin-top: 15px;
  color: red;
  font-weight: bold;
`;

const CustomSlider = ({
  label,
  max,
  min,
  step,
  value,
  unit,
  onChange,
  preciseButons,
}: Props) => {
  const [state, setQuantity] = useState({ quantity: 0, message: "" });
  const stepsQuantity = utils.calculateStepsQuantity(min, max, step);

  useEffect(() => {
    setQuantity({ quantity: value, message: "" });
  }, []);

  useEffect(() => {
    onChange();
    console.log("state.quantity: ", state.quantity);
  }, [state.quantity]);

  const onDragStart = (e: React.DragEvent, id: number) => {};

  const onDragOver = (e: React.DragEvent, id: number) => {
    setQuantity((prevState) => ({
      ...prevState,
      message: "",
      quantity: id,
    }));
  };
  // TODO: Center position of clicked step
  const onStepClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    setQuantity((prevState) => ({
      ...prevState,
      message: "",
      quantity: id,
    }));
  };

  const onClickPlus = () => {
    setQuantity((prevState) =>
      utils.increase({ previousQuantity: prevState.quantity, max, step })
    );
  };

  const onClickMinus = () => {
    setQuantity((prevState) =>
      utils.decrease({ previousQuantity: prevState.quantity, min, step })
    );
  };

  const steps = useMemo(
    () =>
      utils.createArrFromNumber(min, max, step).map((id) => {
        const isHandler = Number(id) === Number(state.quantity);
        return (
          <Step
            draggable
            stepsQuantity={stepsQuantity}
            isHandler={isHandler}
            onClick={(e) => onStepClick(e, id)}
            onDragStart={(e) => onDragStart(e, id)}
            onDragOver={(e) => onDragOver(e, id)}
            key={id}
          >
            {isHandler ? state.quantity + ` ${unit ? ` ${unit}` : null}` : null}
          </Step>
        );
      }),
    [state.quantity]
  );

  return (
    <Wrapper>
      <Label>{label && label}</Label>
      <Row>
        {preciseButons && <PrecisionBtn onClick={onClickMinus}>-</PrecisionBtn>}
        <SliderWrapper>{max && <Slider>{steps}</Slider>}</SliderWrapper>
        {preciseButons && <PrecisionBtn onClick={onClickPlus}>+</PrecisionBtn>}
      </Row>
      <Score>
        <Message>{state?.message}</Message>
      </Score>
    </Wrapper>
  );
};
// TODO: Prevent rerendering each step, maybe some memoization or sliding window technique
// TODO: Rerender only steps that change by using sliding window technique
// TODO: Change slider's logic to move csses only nad numbers without re-rendering everything
// TODO: Maybe value should be changed on drop only
export default CustomSlider;
