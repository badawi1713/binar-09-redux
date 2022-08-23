import React from "react";
import { useSelector } from "react-redux";

const CardImage = () => {
  const { profileReducer } = useSelector((state) => state);
  const { profile } = profileReducer;

  return <img className="card__avatar" src={profile.avatar} alt="avatar" />;
};

export default CardImage;
