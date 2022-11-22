import React, { useContext } from "react";
import AuthProvider from "../Providers/AuthProvider";
import InputProvider from "../Providers/InputProvider";
export const useAuth = () => {
  return useContext(AuthProvider);
};

export const useInputs = () => {
  return useContext(InputProvider);
};
