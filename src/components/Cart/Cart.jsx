import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart">
      <h3>Order Summary: {cart.length}</h3>
      <ol>
        {cart.map((tShirt) => (
          <li key={tShirt._id}>
            {tShirt.name}
            <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
