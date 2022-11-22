import { inputcontext } from "../context/context";
import React, { useState } from "react";

export const InputProvider = ({ children }) => {
  const [xvalue, setXValue] = useState("Defaultvalue");

  return (
    <inputcontext.Provider value={{ xvalue, setXValue }}>
      {children}
    </inputcontext.Provider>
  );
};

export default inputcontext;
