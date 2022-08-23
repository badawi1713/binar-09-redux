import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import "./index.css";

const Card = () => {

  return (
    <main className="container w-full mx-auto px-6 py-8 flex justify-center">
      <div className={`card`}>
        <div className={`card__container`}>
          <CardImage  />
          <CardName  />
        </div>
      </div>
    </main>
  );
};

export default Card;
