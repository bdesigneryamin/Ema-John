import React from "react";

const Cart = (props) => {
  console.log(props);
  const cart = props.cart;
  let totalPrice = 0;
  let shippingPrice = 0;
  for (const product of cart) {
    // console.log(product.price);
    totalPrice = totalPrice + product.price;
    shippingPrice = shippingPrice + product.shipping;
  }
  const tax = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + shippingPrice + tax;
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-5">Order Summary </h2>
      <p className="text-lg font-semibold mb-2">
        Selected Items: {cart.length}
      </p>
      <p className="text-lg font-semibold mb-2">Total Price: ${totalPrice}</p>
      <p className="text-lg font-semibold mb-2">
        Total Shipping Charge: ${shippingPrice}
      </p>
      <p className="text-lg font-semibold mb-6">Tax: ${tax.toFixed(2)}</p>
      <p className="text-xl font-semibold ">Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
