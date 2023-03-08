import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AlturaContext } from "./context/context";

const Modal = () => {
  const { setModal, modal } = useContext(AlturaContext);
  const { props } = modal;
  const { address, name, img, price, desc } = props;

  return (
    <div className="fixed top-0 h-full w-screen bg-slate-600 bg-opacity-20 flex justify-center items-center">
      <div className=" w-2/6 h-3/6 bg-black p-8 gap-4 rounded-xl flex justify-center items-center flex-col relative text-white">
        <AiOutlineClose
          onClick={() => {
            setModal(false);
          }}
          className=" cursor-pointer absolute top-4 left-4"
          size={30}
        />
        <div className=" mt-4 h-3/4 bg-red-300 flex flex-col p-8">
          <img className="h-48 " src={img} />
          <span className=" text-3xl font-bold  ">{name} </span>
          <span className=" text-xl">{desc} </span>
          <span>{address.substring(0, 10)} </span>
          <span>{price} ETH</span>
        </div>
        <button className=" bg-yellow-500 w-3/6 h-1/6 text-3xl rounded-full">
          BUY ITEM
        </button>
      </div>
    </div>
  );
};

export default Modal;
