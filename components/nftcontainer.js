import React, { useContext } from "react";
import { AlturaContext } from "./context/context";
import Nftcard from "./nftcard";

const Nftcontainer = () => {
  const { nftList, setNftList } = useContext(AlturaContext);
  if (!nftList) return false;

  return (
    <div className="  mt-10 z-20  dark:bg-black w-screen  rounded-md md:w-5/6 p-10 flex justify-between flex-wrap gap-5 ">
      {nftList.map((card, index) => {
        return <Nftcard key={index} {...card} />;
      })}
    </div>
  );
};

export default Nftcontainer;
