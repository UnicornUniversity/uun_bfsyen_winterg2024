import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";
import { useNavigate, createSearchParams } from "react-router-dom";

function OverviewItem({ toDoList, handleArchive, handleDelete }) {
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <pre>{JSON.stringify(toDoList, null, 2)}</pre>
      {loggedInUser === toDoList.owner ? (
        <>
          <button
            onClick={() =>
              navigate({
                pathname: "detail",
                search: createSearchParams({ id: toDoList.id }).toString(),
              })
            }
          >
            show
          </button>
          <button onClick={() => handleArchive({ id: toDoList.id })}>archivovat</button>
          <button onClick={() => handleDelete({ id: toDoList.id })}>smazat</button>
        </>
      ) : null}
    </div>
  );
}

export default OverviewItem;
