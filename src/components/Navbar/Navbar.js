import React from "react";
import { NavbarImage } from "./NavbarImage";
import NavbarTitle from "./NavbarTitle";

const Navbar = () => {
  return (
    <nav className="w-full bg-yellow-400 shadow-lg">
      <div className="container mx-auto flex items-center py-4 px-6 justify-between">
        <NavbarImage />
        <NavbarTitle />
      </div>
    </nav>
  );
};

export default Navbar;
