
export const calculateStepsQuantity = (min: number, max: number, step: number) => {
  
  return (+max.toFixed(2) - +min.toFixed(2)) / +step.toFixed(2) + 1
};

export const createArrFromNumber = (min: number, max: number, step: number) => {
  const stepsQuantity = calculateStepsQuantity(min, max, step);
  const arr = new Array(stepsQuantity);
  let num = min;
  for(let i = 0; i < arr.length; i++ ) {
    arr[i] = +num.toFixed(2)
    num += +step.toFixed(2)
  }
  return arr;
};

export function decrease(state: { previousQuantity: number, min: number, step: number }) {
  return {
    message: state.previousQuantity > state.min ? '' : `You reached minimum value (${state.min}).`,
    quantity: state.previousQuantity > state.min ? +state.previousQuantity.toFixed(2) - +state.step.toFixed(2) : +state.min.toFixed(2),
  };
}

export function increase(state: { previousQuantity: number, max: number, step: number}) {
  return {
    message: state.previousQuantity < state.max ? '' :  `You reached maximum value (${state.max}).`,
    quantity: state.previousQuantity < state.max ? +state.previousQuantity.toFixed(2) + +state.step.toFixed(2) : +state.max.toFixed(2),
  };
}
