import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const exist = cart.find(
      (isExistTShirt) => tShirt._id === isExistTShirt._id
    );
    if (exist) {
      toast.error(`${exist.name} already existed!`);
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };
  const handleRemoveFromCart = (tShirt) => {
    const remaining = cart.filter(
      (deletedTShirt) => tShirt._id !== deletedTShirt._id
    );
    setCart(remaining);
  };

  return (
    <div className="shop-container">
      <div className="t-shirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
