import { useState } from "react";
import Form from "react-bootstrap/Form";

function Item({
  item,
  updateToDoItemName,
  updateToDoItemState,
  removeToDoItem,
}) {
  const [itemName, setItemName] = useState(item.name);

  return (
    <div>
      {item.resolved.toString()}{" "}
      <Form.Control
        type="text"
        required
        value={itemName}
        onChange={(e) => {
          setItemName(e.target.value);
        }}
        onBlur={() => {
          updateToDoItemName({
            id: item.id,
            name: itemName,
          });
        }}
      />
      <button
        onClick={() =>
          updateToDoItemState({
            id: item.id,
          })
        }
      >
        resolve
      </button>
      <button
        onClick={() =>
          removeToDoItem({
            id: item.id,
          })
        }
      >
        remove
      </button>
    </div>
  );
}

export default Item;
