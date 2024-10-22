import { useContext, useState } from "react";
import { UserContext } from "../Users/UserProvider";
import { DetailContext } from "./Provider";
import UpdateNameForm from "./UpdateNameForm.js";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const { data } = useContext(DetailContext);

  function handleCloseUpdateModal() {
    setShow(false);
  }

  function hadleOpenUpdateModal() {
    setShow(true);
  }

  return (
    <div style={{ padding: "8px", border: "solid 1px grey" }}>
      <UpdateNameForm show={show} onHide={handleCloseUpdateModal} />
      {data.name}{" "}
      <button
        disabled={loggedInUser !== data.owner}
        onClick={hadleOpenUpdateModal}
      >
        update
      </button>
    </div>
  );
}

export default Toolbar;
