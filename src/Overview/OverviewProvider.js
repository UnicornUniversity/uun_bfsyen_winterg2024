import { useState, useMemo, useContext } from "react";
import Overview from "./Overview";
import { UserContext } from "../Users/UserProvider";

function OverviewProvider() {
  const { loggedInUser } = useContext(UserContext);

  const [showArchived, setShowArchived] = useState(false);
  const [overviewList, setOverviewList] = useState([
    {
      id: "tdl01",
      name: "First ToDo List",
      archived: true,
      owner: "u1",
      memberList: ["u2"],
    },
    {
      id: "tdl02",
      name: "Second ToDo List",
      archived: false,
      owner: "u1",
      memberList: ["u3"],
    },
    {
      id: "tdl03",
      name: "Third ToDo List",
      archived: false,
      owner: "u2",
      memberList: [],
    },
    {
      id: "tdl04",
      name: "Fourth ToDo List",
      archived: true,
      owner: "u3",
      memberList: ["u1", "u2"],
    },
  ]);

  const filteredOverviewList = useMemo(() => {
    if (showArchived) {
      return overviewList.filter(
        (item) =>
          item.owner === loggedInUser || item.memberList.includes(loggedInUser)
      );
    } else {
      return overviewList.filter(
        (item) =>
          !item.archived &&
          (item.owner === loggedInUser ||
            item.memberList.includes(loggedInUser))
      );
    }
  }, [showArchived, overviewList, loggedInUser]);

  return (
    <Overview
      overviewList={filteredOverviewList}
      setOverviewList={setOverviewList}
      showArchived={showArchived}
      setShowArchived={setShowArchived}
    />
  );
}

export default OverviewProvider;
