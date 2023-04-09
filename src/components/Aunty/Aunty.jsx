import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunty = ({ ring }) => {
  const [money] = useContext(MoneyContext);

  return (
    <div>
      <h2>Aunty</h2>
      <p>Money: {money}</p>
      <section className="flex">
        <Cousin>Pibir</Cousin>
        <Cousin ring={ring} hasFriend={true}>
          Mibir
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
