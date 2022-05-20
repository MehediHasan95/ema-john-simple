import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props.carts);
  const { carts } = props;

  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const element of carts) {
    quantity = quantity + element.quantity;
    totalPrice = totalPrice + element.price * element.quantity;
    shipping = shipping + element.shipping;
  }
  let tax = parseFloat((totalPrice * 0.1).toFixed(2));

  let grandTotal = (totalPrice + shipping + tax).toFixed(2);

  return (
    <div className="cart">
      <h5 className="text-uppercase fw-bold text-center">Order Summery</h5>
      <hr />
      <p>Selected items: {quantity}</p>
      <p>Total price: ${totalPrice}</p>
      <p>Shipping cost: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h6>Grand Total: ${grandTotal}</h6>
    </div>
  );
};

export default Cart;
