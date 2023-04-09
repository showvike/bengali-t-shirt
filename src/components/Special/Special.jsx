import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = ({ ring }) => {
  const gold = useContext(RingContext);

  return (
    <div>
      <h4>Special</h4>
      {ring && (
        <p>
          <small>Ring: {ring}</small>
          <br />
          <small>Ring: {gold}</small>
        </p>
      )}
    </div>
  );
};

export default Special;
