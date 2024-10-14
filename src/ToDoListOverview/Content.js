import ToDoListOverviewItem from "./ToDoListOverviewItem";

function Content({ toDoListList, setToDoListList }) {
  return toDoListList.map((toDoList) => {
    return (
      <ToDoListOverviewItem
        itemData={toDoList}
        setToDoListList={setToDoListList}
      />
    );
  });
}

export default Content;
