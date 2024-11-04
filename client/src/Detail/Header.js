import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      AppName{" "}
      {userList.map((user) => (
        <button key={user.id} onClick={() => setLoggedInUser(user.id)}>
          {user.name} {(user.id === loggedInUser).toString()}
        </button>
      ))}
    </div>
  );
}

export default Header;
