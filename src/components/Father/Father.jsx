import React from "react";
import MySelf from "../MySelf/MySelf";

const Father = ({ ring }) => {
  return (
    <div>
      <h2>Father</h2>
      <MySelf ring={ring}></MySelf>
    </div>
  );
};

export default Father;
