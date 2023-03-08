import React from "react";
import Nftcard from "./nftcard";

const Nftcontainer = () => {
  const CardProps = [
    {
      address: "0x2341ACE221",
      img: "/next.svg",
      price: 4,
      desc: "best nft in the world.",
      name: "NEXT",
    },
    {
      address: "0x2341ACE221",
      img: "/vercel.svg",
      price: 4,
      desc: "wors nft in the world.",
      name: "VERCEL",
      name: "NEXT",
    },
    {
      address: "0x2341ACE221",
      img: "/next.svg",
      price: 4,
      desc: "best nft in the world.",
    },
    {
      address: "0x2341ACE221",
      img: "/vercel.svg",
      price: 4,
      desc: "wors nft in the world.",
      name: "VERCEL",
    },
  ];

  return (
    <div className=" bg-pink-600 bg-opacity-5 rounded-md w-5/6 p-10 flex justify-between flex-wrap gap-5 ">
      {CardProps.map((card, index) => {
        return <Nftcard key={index} {...card} />;
      })}
    </div>
  );
};

export default Nftcontainer;
