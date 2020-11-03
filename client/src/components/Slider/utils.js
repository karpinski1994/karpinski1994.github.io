
export const calculateStepsQuantity = (min, max, step) => {
  
  return (+max.toFixed(2) - +min.toFixed(2)) / +step.toFixed(2) + 1
};

export const createArrFromNumber = (min, max, step) => {
  const stepsQuantity = calculateStepsQuantity(min,max,step);
  console.log('stepsQuantity: ', stepsQuantity);
  const arr = new Array(stepsQuantity);
  let num = min;
  for(let i = 0; i < arr.length; i++ ) {
    arr[i] = +num.toFixed(2)
    num += +step.toFixed(2)
  }
  return arr;
};


export function decrease({ previousQuantity, min, step = 1 }) {
  return {
    message: previousQuantity > min ? null : "Min!",
    quantity: previousQuantity > min ? +previousQuantity.toFixed(2) - +step.toFixed(2) : +min.toFixed(2),
  };
}

export function increase({ previousQuantity, max, step = 1 }) {
  return {
    message: previousQuantity < max ? null : "Max!",
    quantity: previousQuantity < max ? +previousQuantity.toFixed(2) + +step.toFixed(2) : +max.toFixed(2),
  };
}
