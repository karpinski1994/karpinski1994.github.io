import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  createArrFromNumber,
  calculateStepsQuantity,
  decrease,
  increase,
} from "./utils";

const sliderBtnWidth = 72;
const sliderBtnHeight = 27;
const sliderRadius = 27;
const bgColor = "#aaa";

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
const Step = styled.div<StyledProps>`
  /* TODO: set propper css property for selecting button as a whole */

  user-select: all;
  background-color: ${({isHandler}) => (isHandler ? "white" : null)};
  border: ${({isHandler}) => (isHandler ? `1px solid ${bgColor}` : null)};
  border-radius: ${sliderRadius}px;
  // TODO: Center position of clicked step
  width: calc(100% / ${({stepsQuantity}) => stepsQuantity});
`;

const Score = styled.div``;

const Message = styled.div``;

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
  const [state, setQuantity] = useState({ quantity: 0, message: '' });
  const stepsQuantity = calculateStepsQuantity(min, max, step);

  useEffect(() => {
    setQuantity({ quantity: value, message: '' });
  }, []);

  useEffect(() => {
    onChange();
    console.log('state.quantity: ', state.quantity)
  }, [state.quantity]);

  const onDragStart = (e: React.DragEvent, id: number) => {
  };

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
      increase({ previousQuantity: prevState.quantity, max, step })
    );
  };

  const onClickMinus = () => {
    setQuantity((prevState) =>
      decrease({ previousQuantity: prevState.quantity, min, step })
    );
  };

  const steps = useMemo(() =>
    createArrFromNumber(min, max, step).map((id) => {
      const isHandler = Number(id) === Number(state.quantity);
      return (
        <Step
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
    }), [state.quantity]
  );

  return (
    <Wrapper>
      <Row>
        {label && label}
        {preciseButons && <PrecisionBtn onClick={onClickMinus}>-</PrecisionBtn>}
        <SliderWrapper>{max && <Slider>{steps}</Slider>}</SliderWrapper>
        {preciseButons && <PrecisionBtn onClick={onClickPlus}>+</PrecisionBtn>}
      </Row>
      <Score>
        <Message>{state.quantity}</Message>
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
