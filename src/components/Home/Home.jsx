import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tShirts = useLoaderData();
  return (
    <div>
      <h3>This is Home: {tShirts.length}</h3>
    </div>
  );
};

export default Home;
