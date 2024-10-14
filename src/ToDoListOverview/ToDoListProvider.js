import { useState } from "react";
import ToDoListOverview from "./ToDoListOverview";

function ToDoListProvider() {
  const [toDoListList, setToDoListList] = useState([
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
    <ToDoListOverview
      toDoListList={toDoListList}
      setToDoListList={setToDoListList}
    />
  );
}

export default ToDoListProvider;
