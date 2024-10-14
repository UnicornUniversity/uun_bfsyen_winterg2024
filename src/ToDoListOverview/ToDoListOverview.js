import Header from "./Header";
import Content from "./Content";

function ToDoListOverview({ toDoListList, setToDoListList }) {
  return (
    <>
      <Header setToDoListList={setToDoListList} />
      <Content toDoListList={toDoListList} setToDoListList={setToDoListList} />
    </>
  );
}

export default ToDoListOverview;
