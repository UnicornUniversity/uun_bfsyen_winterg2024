import { useState } from "react";
import Overview from "./Overview";

function OverviewProvider() {
  const [overviewList, setOverviewList] = useState([
    {
      id: "tdl01",
      name: "First ToDo List",
    },
    {
      id: "tdl02",
      name: "Second ToDo List",
    },
    {
      id: "tdl03",
      name: "Third ToDo List",
    },
    {
      id: "tdl04",
      name: "Fourth ToDo List",
    },
  ]);

  return (
    <Overview overviewList={overviewList} setOverviewList={setOverviewList} />
  );
}

export default OverviewProvider;
