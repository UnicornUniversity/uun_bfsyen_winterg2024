import { createContext, useMemo, useState, useContext, useEffect } from "react";

import { UserContext } from "../Users/UserProvider.js";
import FetchHelper from "../FetchHelper.js";

export const OverviewContext = createContext();

function OverviewProvider({ children }) {
  const [showArchived, setShowArchived] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const [overviewDataLoader, setOverviewDataLoader] = useState({
    state: "ready", // ready / pending / error
    data: null,
    error: null,
  });
  const [toDoListOverviewList, setToDoListOverviewList] = useState([]);

  async function handleLoad() {
    setOverviewDataLoader((current) => {
      return { ...current, state: "pending" };
    });
    const result = await FetchHelper().toDoList.list();
    setOverviewDataLoader((current) => {
      if (result.ok) {
        return {
          ...current,
          state: "ready",
          data: result.data,
          error: null,
        };
      } else {
        return { ...current, state: "error", error: result.data };
      }
    });
  }

  useEffect(() => {
    handleLoad();
  }, []);

  async function handleCreate(dtoIn) {
    setOverviewDataLoader((current) => {
      return { ...current, state: "pending" };
    });
    await FetchHelper().toDoList.create({
      name: dtoIn.name,
      owner: loggedInUser,
    });
    handleLoad();
  }

  function handleArchive(dtoIn) {
    setToDoListOverviewList((current) => {
      const itemIndex = current.findIndex((item) => item.id === dtoIn.id);
      current[itemIndex] = { ...current[itemIndex], state: "archived" };
      return current.slice();
    });
  }

  function handleDelete(dtoIn) {
    setToDoListOverviewList((current) => {
      const itemIndex = current.findIndex((item) => item.id === dtoIn.id);
      current.splice(itemIndex, 1);
      return current.slice();
    });
  }

  const filteredToDoListList = useMemo(() => {
    if (showArchived) {
      return overviewDataLoader.data?.filter(
        (item) =>
          item.owner === loggedInUser || item.memberList?.includes(loggedInUser)
      );
    } else {
      return overviewDataLoader.data?.filter(
        (item) =>
          item.state === "active" &&
          (item.owner === loggedInUser ||
            item.memberList?.includes(loggedInUser))
      );
    }
  }, [showArchived, overviewDataLoader.data, loggedInUser]);

  const value = {
    state: overviewDataLoader.state,
    data: filteredToDoListList,
    error: overviewDataLoader.error,
    handlerMap: {
      handleLoad,
      handleCreate,
      handleArchive,
      handleDelete,
    },
    showArchived,
    setShowArchived,
  };

  return (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
}

export default OverviewProvider;
