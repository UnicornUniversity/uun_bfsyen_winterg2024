import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";

function OverviewItem({ toDoList, handleArchive, handleDelete }) {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <pre>{JSON.stringify(toDoList, null, 2)}</pre>
      {loggedInUser === toDoList.owner ? (
        <>
          <button onClick={() => handleArchive({ id: toDoList.id })}>archivovat</button>
          <button onClick={() => handleDelete({ id: toDoList.id })}>smazat</button>
        </>
      ) : null}
    </div>
  );
}

export default OverviewItem;
