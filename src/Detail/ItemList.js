import { useContext } from "react";
import { DetailContext } from "./Provider";
import Item from "./Item";

function ItemList() {
  const { data, handlerMap } = useContext(DetailContext);

  return (
    <div style={{ padding: "8px", border: "solid 1px grey" }}>
      Item List <button onClick={handlerMap.addToDoItem}>add item</button>
      {data.itemList.map((item) => (
        <Item
          key={item.id}
          item={item}
          updateToDoItemName={handlerMap.updateToDoItemName}
          updateToDoItemState={handlerMap.updateToDoItemState}
          removeToDoItem={handlerMap.removeToDoItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
