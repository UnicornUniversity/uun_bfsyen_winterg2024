import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState("u1");
  const value = {
    userList: [
      {
        name: "aragorn",
        id: "u1",
      },
      {
        name: "gandalf",
        id: "u2",
      },
      {
        name: "frodo",
        id: "u3",
      },
    ],
    loggedInUser,
    setLoggedInUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
export default UserContext;