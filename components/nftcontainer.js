import React, { useContext } from "react";
import { AlturaContext } from "./context/context";
import Nftcard from "./nftcard";

const Nftcontainer = () => {
  const { nftList, setNftList } = useContext(AlturaContext);
  if (!nftList) return false;

  return (
    <div className="  mt-10 z-20 p-2  rounded-md md:w-5/6 md:p-10 flex justify-between flex-wrap gap-5 ">
      {nftList.map((card, index) => {
        return <Nftcard key={index} {...card} />;
      })}
    </div>
  );
};

export default Nftcontainer;
