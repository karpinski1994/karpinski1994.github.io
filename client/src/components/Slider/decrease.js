export default function decrease({ previousQuantity, min }) {
  return {
    message: previousQuantity > min ? null : "Min!",
    quantity: previousQuantity > min ? previousQuantity - 1 : min
  };
}
