import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
export const AlturaContext = createContext();

const AlturaProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [nftList, setNftList] = useState(false);

  useEffect(() => {
    getNfts();
  }, []);

  const getNfts = async () => {
    const options = {
      method: "GET",
      url: "https://opensea13.p.rapidapi.com/assets",
      params: {
        collection_slug: "akidcalledbeast",
        order_direction: "desc",
        limit: "6",
        include_orders: "false",
      },
      headers: {
        "X-RapidAPI-Key": "118d07676emshd74bdb72db31f32p198b13jsnc0127ab71e5b",
        "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNftList(response?.data?.assets);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <AlturaContext.Provider
      value={{
        modal,
        setModal,
        nftList,
        setNftList,
      }}
    >
      {children}
    </AlturaContext.Provider>
  );
};

export default AlturaProvider;
