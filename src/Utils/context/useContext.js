import AuthProvider from "../Providers/AuthProvider";
import InputProvider from "../Providers/InputProvider";
import React, { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthProvider);
};

export const useInputs = () => {
  return useContext(InputProvider);
};
