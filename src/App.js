import "./App.css";
import OverviewProvider from "./Overview/OverviewProvider";
import { UserProvider } from "./Users/UserProvider.js";

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
