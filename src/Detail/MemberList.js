import { useContext } from "react";
import { UserContext } from "../Users/UserProvider";
import { DetailContext } from "./Provider";
import Member from "./Member";

function MemberList() {
  const { loggedInUser } = useContext(UserContext);
  const { data } = useContext(DetailContext);

  return (
    <div style={{ padding: "8px", border: "solid 1px grey" }}>
      <div>
        Member List{" "}
        <button disabled={loggedInUser !== data.owner}>add member</button>
      </div>
      <div>
        <Member key={data.owner} memberId={data.owner} owner={true} />
        {data.memberList.map((memberId) => (
          <Member key={memberId} memberId={memberId} ownerId={data.owner} />
        ))}
      </div>
    </div>
  );
}

export default MemberList;
