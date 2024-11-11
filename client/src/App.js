import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Detail from "./Detail/Detail";
import Overview from "./Overview/Overview";
import UserProvider from "./Users/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Overview />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
