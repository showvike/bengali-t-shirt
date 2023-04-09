import React from "react";

const Special = ({ ring }) => {
  return (
    <div>
      <h4>Special</h4>
      {ring && (
        <p>
          <small>Ring: {ring}</small>
        </p>
      )}
    </div>
  );
};

export default Special;
