import React from "react";
import { BsSunFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed mb-10 text-white  bg-blue-400 items-center rounded-lg bg-opacity-10 top-4 w-2/4 h-46 justify-between flex flex-row text-2xl p-8">
      <img width={50} height={20} src="/altura.png" />
      <h1>ALTURA</h1>
      <BsSunFill />
    </div>
  );
};

export default Navbar;
