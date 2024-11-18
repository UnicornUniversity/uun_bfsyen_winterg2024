import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Detail from "./Detail/Detail";
import UserProvider from "./Users/UserProvider";
import OverviewProvider from "./Overview/OverviewProvider";

function App() {
  return (
    <div className="m-4">
      <UserProvider>
        <OverviewProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Detail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </OverviewProvider>
      </UserProvider>
    </div>
  );
}

export default App;
