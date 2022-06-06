
import { createContext, useState } from "react";
import React from "react";
import StoreDetail from "./component/store/detail/StoreDetail";


export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [address1, setAddress1] = useState("");  // 우편번호
  const [address2, setAddress2] = useState("");  // 주소

   const [room, setRoom] = useState({
     roomNumber : "",
     roomName : "",
     users : [],

   });

  const value = {
    address1 : address1,
    address2 : address2,
    setAddress1 : setAddress1,
    setAddress2 : setAddress2,
  };

  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  );
};



export const StoreDetailContext = createContext();

export const StoreDetailProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const [storeDetail, setStoreDetail] = useState({
  });  

  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const value = {
    storeDetail : storeDetail,
    setStoreDetail : setStoreDetail,
    isLoading : isLoading,
    setLoading : setLoading,
    cartList : cartList,
    setCartList : setCartList,
    cartTotal : cartTotal,
    setCartTotal : setCartTotal,
  };

  return (
    <StoreDetailContext.Provider value={value}>
      {/* {children} */}
      <StoreDetail></StoreDetail>
    </StoreDetailContext.Provider>
  );
};