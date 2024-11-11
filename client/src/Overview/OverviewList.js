import { useContext } from "react";
import { OverviewContext } from "./OverviewProvider.js";

import OverviewItem from "./OverviewItem";

function OverviewList({ setSelected }) {
  const { data, handlerMap } = useContext(OverviewContext);

  return (
    <div>
      {data.map((toDoList) => (
        <OverviewItem
          key={toDoList.id}
          toDoList={toDoList}
          handleArchive={handlerMap.handleArchive}
          handleDelete={handlerMap.handleDelete}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

export default OverviewList;
