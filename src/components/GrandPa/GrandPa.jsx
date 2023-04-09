import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const RingContext = createContext(1);
export const MoneyContext = createContext(1);

const GrandPa = () => {
  const ring = "💍";
  const [money, setMoney] = useState(0);

  return (
    <div className="grand-pa">
      <h1>GrandPa</h1>
      <p>Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value={"Gold"}>
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
