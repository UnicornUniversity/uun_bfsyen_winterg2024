import "./App.css";
import Detail from "./Detail/Detail.js";
import { UserProvider } from "./Users/UserProvider.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Detail />
      </UserProvider>
    </div>
  );
}

export default App;
