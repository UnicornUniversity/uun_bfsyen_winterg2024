import { useContext } from "react";
import { UserContext } from "../Users/UserProvider";

function Member({ memberId, ownerId, owner }) {
  const { userMap, loggedInUser } = useContext(UserContext);

  return (
    <div>
      {userMap[memberId].name} {owner ? owner.toString() : null}{" "}
      {!owner && (ownerId === loggedInUser || memberId === loggedInUser) ? (
        <button>remove</button>
      ) : null}
    </div>
  );
}

export default Member;
