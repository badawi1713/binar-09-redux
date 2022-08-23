import React from "react";
import { useSelector } from "react-redux";

const CardName = () => {
  const { profileReducer } = useSelector((state) => state);
  const { profile } = profileReducer;
  return (
    <>
      <h5 className={`card__name`}>{profile.name}</h5>
    </>
  );
};

export default CardName;
