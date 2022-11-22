import "./App.css";
import axios from "axios";
import { useState } from "react";

import Sample from "./Pages/samplePage";
import AnotherContext from "./Pages/AnotherContext";
import TestAccessUri from "./Pages/TestAccessUri";
import { setCookie, getCookie, clearCookie } from "./Utils/Helper/cookie";

function App() {
  const [fetch, setFetch] = useState("");
  const [cookie, setcok] = useState("");
  const handleFetch = async () => {
    const res = await axios.get(process.env.PUBLIC_URL + "/config.json");
    setFetch(res.data.key);
    setCookie({ name: "reenjay", lastname: "caimor" });
  };

  const handleget = async () => {
    setcok(getCookie());
  };

  const handleclear = async () => {
    clearCookie();
  };

  return (
    <div>
      <button onClick={handleFetch}>TestFetch and sve cookie</button>
      <button onClick={handleget}>getCookie</button>

      <button onClick={handleclear}>ClearCookie</button>
      <div style={{ padding: "10px", backgroundColor: "gray" }}>
        <h6 style={{ color: "white" }}>{fetch}</h6>
      </div>

      {cookie && (
        <>
          <div style={{ padding: "10px" }}>
            {cookie.name + " " + cookie.lastname}
          </div>
        </>
      )}

      <Sample />
      <AnotherContext />
      <hr />
      <TestAccessUri />
    </div>
  );
}

export default App;
