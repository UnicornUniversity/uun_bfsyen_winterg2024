import { useContext } from "react";
import { UserContext } from "../Users/UserProvider";

function Header({ setOverviewList, showArchived, setShowArchived }) {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <>
      <button
        onClick={() =>
          setOverviewList((currentValue) => {
            currentValue.push({ id: Math.random(), name: Math.random() });
            return currentValue.slice();
          })
        }
      >
        create
      </button>{" "}
      <button onClick={() => setShowArchived((currentValue) => !currentValue)}>
        {showArchived ? "with archived" : "active only"}
      </button>
      {userList.map((user) => (
        <button onClick={() => setLoggedInUser(user.id)}>
          {user.name} {(loggedInUser === user.id).toString()}
        </button>
      ))}
    </>
  );
}

export default Header;
