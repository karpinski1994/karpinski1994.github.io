export const createArrFromNumber = (num) => Array.from(Array(num).keys());


export function decrease({ previousQuantity, min }) {
  return {
    message: previousQuantity > min ? null : "Min!",
    quantity: previousQuantity > min ? previousQuantity - 1 : min,
  };
}

export function increase({ previousQuantity, max }) {
  return {
    message: previousQuantity < max ? null : "Max!",
    quantity: previousQuantity < max ? previousQuantity + 1 : max,
  };
}
