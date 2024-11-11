import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Detail from "./Detail/Detail";
import Overview from "./Overview/Overview";
import UserProvider from "./Users/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Overview />
      </UserProvider>
    </div>
  );
}

export default App;
