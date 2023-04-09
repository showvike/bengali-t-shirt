import React from "react";
import "./TShirt.css";

const TShirt = ({ tShirt, handleCart }) => {
  const { picture, gender, name, price, _id } = tShirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt={gender} />
      <div>
        <p>{name}</p>
        <p>Price: {price}</p>
      </div>
      <button onClick={() => handleCart(_id)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
