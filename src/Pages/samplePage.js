import React, { useState } from "react";
import { useAuth } from "../Utils/context/useContext";
import { TextField } from "../Components/Layouts/Package";
const Sample = () => {
  const { user, setUser } = useAuth();
  return (
    <>
      <TextField
        style={{ marginTop: "10px", marginLeft: "10px" }}
        id="outlined-basic"
        label="Enter text"
        variant="outlined"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <br />
      auth COntext value :{user}
    </>
  );
};

export default Sample;
