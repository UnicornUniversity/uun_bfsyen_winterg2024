import "./App.css";
import OverviewProvider from "./Overview/OverviewProvider";
import { UserProvider } from "./Users/UserProvider.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <OverviewProvider />
      </UserProvider>
    </div>
  );
}

export default App;
