import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { AlturaContext } from "./context/context";

const Modal = () => {
  const { setModal, modal } = useContext(AlturaContext);
  const { props } = modal;
  const { name, image_preview_url, asset_contract, creator, permalink } = props;

  return (
    <div className="fixed top-0 z-20 h-full  w-screen bg-slate-600 bg-opacity-60 flex justify-center items-center">
      <div className=" w-4/12 animate-animate h-4/6 bg-gradient-to-r from-blue-400 via-blue-300 to-pink-300 dark:bg-gradient-to-r dark:from-blue-800 dark:via-blue-700 dark:to-pink-500 p-8 gap-8 rounded-xl flex justify-center items-center flex-col relative ">
        <AiOutlineClose
          onClick={() => {
            setModal(false);
          }}
          className=" cursor-pointer absolute top-4 left-4"
          size={30}
        />
        <div className="w-full items-center mt-4 h-3/4 rounded-lg gap-2 flex flex-col justify-center p-8">
          <img className="w-3/4 rounded-md " src={image_preview_url} />
          <span className=" text-3xl font-bold  ">{name} </span>
          <span className=" text-xl">{asset_contract.name} </span>
          <span>{creator.address.substring(0, 10)} </span>
        </div>
        <Link
          target="_blank"
          href={permalink}
          className=" justify-center flex items-center bg-white  dark:bg-blue-600 w-3/6 font-bold text-2xl rounded-full"
        >
          BUY
        </Link>
      </div>
    </div>
  );
};

export default Modal;
