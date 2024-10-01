import "./App.css";
import ToDo from "./ToDo";

function App() {
  const toDoList = [
    {
      id: "a1",
      done: false,
      text: "first toDo",
    },
    {
      id: "a2",
      done: true,
      text: "second toDo",
    },
    {
      id: "a3",
      done: true,
      text: "third toDo",
    },
    {
      id: "a4",
      done: false,
      text: "fourth toDo",
    },
  ];

  return (
    <div className="App">
      {toDoList.map((toDoItem) => {
        return (
          <ToDo key={toDoItem.id} done={toDoItem.done} text={toDoItem.text} />
        );
      })}
    </div>
  );
}

export default App;
