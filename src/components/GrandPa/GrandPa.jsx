import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  const ring = "💍";

  return (
    <div className="grand-pa">
      <h1>GrandPa</h1>
      <section className="flex">
        <Father ring={ring}></Father>
        <Uncle></Uncle>
        <Aunty ring={ring}></Aunty>
      </section>
    </div>
  );
};

export default GrandPa;
