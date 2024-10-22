import { useContext } from "react";
import { UserContext } from "../Users/UserProvider";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <div style={{ padding: "8px", border: "solid 1px grey" }}>
      ToDoList App{" "}
      {userList.map((user) => (
        <button key={user.id} onClick={() => setLoggedInUser(user.id)}>
          {user.name} {(loggedInUser === user.id).toString()}
        </button>
      ))}
    </div>
  );
}

export default Header;
