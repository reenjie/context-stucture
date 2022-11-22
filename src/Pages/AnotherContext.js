import React from "react";
import { InputProvider } from "../Utils/Providers/InputProvider";
import { useInputs } from "../Utils/context/useContext";
const AnotherContext = () => {
  return (
    <InputProvider>
      <h6>AnotherContext</h6>
      <SampOtherComponent />
    </InputProvider>
  );
};

const SampOtherComponent = () => {
  const { xvalue, setXValue } = useInputs();
  return (
    <>
      <input
        placeholder="This is a sample code of another context"
        onChange={(e) => {
          setXValue(e.target.value);
        }}
      />
      <br></br>
      Another Context value :{xvalue}
    </>
  );
};

export default AnotherContext;
