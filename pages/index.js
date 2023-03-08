import { AlturaContext } from "@/components/context/context";
import Modal from "@/components/modal";
import Navbar from "@/components/navbar";
import Nftcontainer from "@/components/nftcontainer";
import { useContext } from "react";

export default function Home() {
  const { modal } = useContext(AlturaContext);
  return (
    <>
      <div className=" w-screen dark:bg-black bg-white flex justify-center items-center flex-col ">
        <Navbar />
        <div className=" w-full  justify-center flex mt-10  p-20">
          <Nftcontainer />
        </div>
      </div>
      {modal && <Modal />}
    </>
  );
}
