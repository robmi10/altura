import React, { useContext } from "react";
import { AlturaContext } from "./context/context";

const Nftcard = ({ ...props }) => {
  const { setModal } = useContext(AlturaContext);
  const { name, image_preview_url, price, description, asset_contract } = props;

  return (
    <div
      onClick={() => {
        setModal({ props });
      }}
      className="animate-animate w-full md:w-5/12 cursor-pointer shadow-gl shadow-[#185ee041] h-auto bg-gradient-to-r from-blue-400 via-blue-300 to-pink-300 bg-opacity-10 dark:bg-gradient-to-r dark:from-blue-800 dark:via-blue-700 dark:to-pink-500  p-10 rounded-xl"
    >
      <div className="   flex flex-col gap-4">
        <img className="h-62 rounded-md" src={image_preview_url} />
        <span className=" text-3xl font-bold  ">{name} </span>

        <span>{asset_contract.address.substring(0, 10)} </span>
      </div>
    </div>
  );
};

export default Nftcard;
