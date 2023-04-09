import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) message = <p>Please Order</p>;
  else message = <p>Thank You</p>;

  return (
    <div className={`cart ${cart.length > 6 ? "blue" : ""}`}>
      <h3>Order Summary: {cart.length}</h3>
      {message}
      <ol className={cart.length < 3 ? "red" : "green"}>
        {cart.map((tShirt) => (
          <li key={tShirt._id}>
            {tShirt.name}
            <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
          </li>
        ))}
      </ol>
      {cart.length <= 2 ? <p>Fokirrr</p> : <p>Aro Order Den</p>}
      {cart.length === 3 && <p>Tin ta hosie</p>}
      {cart.length <= 3 || <p>Boroloxxx</p>}
    </div>
  );
};

export default Cart;
