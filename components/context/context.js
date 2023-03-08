import React from "react";
import { createContext, useState } from "react";
export const AlturaContext = createContext();

const AlturaProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <AlturaContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </AlturaContext.Provider>
  );
};

export default AlturaProvider;
