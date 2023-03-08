import React, { useContext } from "react";
import { AlturaContext } from "./context/context";

const Nftcard = ({ ...props }) => {
  const { setModal } = useContext(AlturaContext);
  const { address, name, img, price, desc } = props;

  return (
    <div className=" w-5/12 h-auto bg-red-200  border-2 p-10 rounded-xl">
      <div className=" text-black flex flex-col gap-4">
        <img className="h-48" src={img} />
        <span className=" text-3xl font-bold  ">{name} </span>
        <span className=" text-xl">{desc} </span>
        <span>{address.substring(0, 10)} </span>
        <span>{price} ETH</span>
        <button
          onClick={() => {
            setModal({ props });
          }}
          className=" w-4/12 bg-black justify-center text-white rounded-full p-2 h-10 flex items-center"
        >
          BUY ITEM
        </button>
      </div>
    </div>
  );
};

export default Nftcard;
