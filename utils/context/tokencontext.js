"use client";
import React, { createContext, useState, useEffect } from "react";
import { currentUser } from "../service/userService";

const TokenCont = createContext();

const TokenContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    async function load() {
      try {
        const currUser = await currentUser();
        setUserData({ ...currUser });
      } catch (error) {
        console.log(error);
        // toast.error("Error while loading the user");
        setUserData(undefined);
      }
    }
    load();
  }, []);

  return (
    <TokenCont.Provider value={{ userData, setUserData }}>
      {children}
    </TokenCont.Provider>
  );
};

export default TokenContextProvider;
export { TokenCont };
