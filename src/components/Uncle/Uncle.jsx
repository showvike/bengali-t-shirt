import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Uncle</h2>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000/=</button>
      <section className="flex">
        <Cousin>Abir</Cousin>
        <Cousin>Nibir</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
