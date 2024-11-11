import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./Header";
import Detail from "./Detail/Detail";
import Overview from "./Overview/Overview";
import UserProvider from "./Users/UserProvider";
import { useState } from "react";

function App() {
  let params = new URLSearchParams(document.location.search);

  const [selected, setSelected] = useState(params.get("id"));

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <div>
            <Overview setSelected={setSelected} />
          </div>
          <div>{selected ? <Detail id={selected} /> : "placeholder saying no toDoList has been selected"}</div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
