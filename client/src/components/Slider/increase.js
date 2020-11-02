export default function increase({ previousQuantity, max }) {
  return {
    message: previousQuantity < max ? null : "Max!",
    quantity: previousQuantity < max ? previousQuantity + 1 : max
  };
}
