import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./item.css";

function Item({ data, handlerMap }) {
  const [value, setValue] = useState(data.name);

  return (
    <div className={`item ${data.resolved ? "item-resolved" : ""}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
      />{" "}
      <Button onClick={() => handlerMap.toggleResolveItem({ id: data.id })}>
        {data.resolved ? "unresolve" : "resolve"}
      </Button>
      <button onClick={() => handlerMap.deleteItem({ id: data.id })}>
        delete
      </button>
    </div>
  );
}

export default Item;