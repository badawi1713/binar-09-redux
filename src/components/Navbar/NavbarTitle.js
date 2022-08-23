import React from "react";
import { useSelector } from "react-redux";

const NavbarTitle = () => {
  const { profileReducer } = useSelector((state) => state);
  const { profile} = profileReducer;
  return (
    <div className="flex items-center gap-2">
      <img className="w-12 h-12 rounded-full" src={profile.avatar} alt="avatar" />
      <p className="font-medium">{profile.name}</p>
    </div>
  );
};

export default NavbarTitle;
