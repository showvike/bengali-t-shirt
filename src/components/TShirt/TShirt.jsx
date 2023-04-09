import React from "react";
import "./TShirt.css";

const TShirt = ({ tShirt, handleAddToCart }) => {
  const { picture, gender, name, price } = tShirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt={gender} />
      <div>
        <p>{name}</p>
        <p>Price: {price}</p>
      </div>
      <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
