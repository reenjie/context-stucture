import { authcontext } from "../context/context";
import React, { useState } from "react";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("awwwooo");

  return (
    <authcontext.Provider value={{ user, setUser }}>
      {children}
    </authcontext.Provider>
  );
};

export default authcontext;
