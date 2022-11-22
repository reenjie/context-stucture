import React from "react";
import { saveEnlistment, getStudentEnlistHistory } from "../Utils/context/uri";
import { Button, TextField } from "../Components/Layouts/Package";
const TestAccessUri = () => {
  //This will get the id's
  return (
    <>
      TEst URI
      {getStudentEnlistHistory(10)}
      <br />
      <hr />
      Test Mui
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Hello World</Button>
    </>
  );
};

export default TestAccessUri;
