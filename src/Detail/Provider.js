import { useState } from "react";
import { createContext } from "react";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  const [detail, setDetail] = useState({
    id: "tdl01",
    name: "First ToDo List",
    owner: "u1",
    memberList: ["u2", "u3"],
    itemList: [
      {
        id: "i01",
        name: "2x milk",
        resolved: false,
      },
      {
        id: "i02",
        name: "2x yogurth",
        resolved: false,
      },
    ],
  });

  function addToDoItem() {
    setDetail((current) => {
      current.itemList.push({
        id: Math.random(),
        name: "new item",
        resolved: false,
      });
      return { ...current };
    });
  }

  function updateToDoItemName(dtoIn) {
    setDetail((current) => {
      const itemIndex = current.itemList.findIndex((item) => {
        return item.id === dtoIn.id;
      });
      current.itemList[itemIndex].name = dtoIn.name;
      return { ...current };
    });
  }

  function updateToDoItemState(dtoIn) {
    setDetail((current) => {
      const itemIndex = current.itemList.findIndex((item) => {
        return item.id === dtoIn.id;
      });
      current.itemList[itemIndex].resolved =
        !current.itemList[itemIndex].resolved;
      return { ...current };
    });
  }

  function removeToDoItem(dtoIn) {
    setDetail((current) => {
      const itemIndex = current.itemList.findIndex((item) => {
        return item.id === dtoIn.id;
      });
      current.itemList.splice(itemIndex, 1);
      return { ...current };
    });
  }

  return (
    <DetailContext.Provider
      value={{
        data: detail,
        handlerMap: {
          addToDoItem,
          updateToDoItemName,
          updateToDoItemState,
          removeToDoItem,
        },
      }}
    >
      {children}
    </DetailContext.Provider>
  );
}

export default DetailProvider;
