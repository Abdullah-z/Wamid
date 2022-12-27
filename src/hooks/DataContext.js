import React, { createContext, useContext, useEffect, useState } from "react";

const Data = createContext();

const DataContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (currency === "EUR") setSymbol("€");
    else if (currency === "USD") setSymbol("$");
    else if (currency === "GBP") setSymbol("£");
    else if (currency === "JPY") setSymbol("¥");
    else if (currency === "PKR") setSymbol("Rs.");
    else if (currency === "RUB") setSymbol("₽");
    else if (currency === "AUD") setSymbol("$");
  }, [currency]);

  return (
    <Data.Provider
      value={{ currency, setCurrency, symbol, modalData, setModalData }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataContext;

export const DataState = () => {
  return useContext(Data);
};
