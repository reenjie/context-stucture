import "./App.css";
import axios from "axios";
import { useState } from "react";

import Sample from "./Pages/samplePage";
import AnotherContext from "./Pages/AnotherContext";
import TestAccessUri from "./Pages/TestAccessUri";

function App() {
  const [fetch, setFetch] = useState("");
  const handleFetch = async () => {
    const res = await axios.get(process.env.PUBLIC_URL + "/config.json");
    setFetch(res.data.key);
  };

  return (
    <div>
      <button onClick={handleFetch}>TestFetch</button>
      <div style={{ padding: "10px", backgroundColor: "gray" }}>
        <h6 style={{ color: "white" }}>{fetch}</h6>
      </div>

      <Sample />
      <AnotherContext />
      <hr />
      <TestAccessUri />
    </div>
  );
}

export default App;
