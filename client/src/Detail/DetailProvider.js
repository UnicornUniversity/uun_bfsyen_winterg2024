import { createContext, useMemo, useState, useContext, useEffect } from "react";
import { OverviewContext } from "../Overview/OverviewProvider.js";
import { useSearchParams } from "react-router-dom";
import FetchHelper from "../Overview/FetchHelper.js";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  const { data: overviewData, state, error } = useContext(OverviewContext);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");

  const [detailDataLoader, setDetailDataLoader] = useState({
    state: "ready",
    data: null,
    error: null,
  });

  async function handleLoad() {
    await FetchHelper().toDoList.get({ id: selectedId });
  }

  useEffect(() => handleLoad(), []);

  const data = overviewData?.find((item) => item.id === selectedId);

  const setData = () => {};

  const [showResolved, setShowResolved] = useState(false);

  const filteredData = useMemo(() => {
    const result = { ...data };
    if (!showResolved) {
      result.itemList = result?.itemList?.filter((item) => !item.resolved);
    }
    return result;
  }, [data, showResolved]);

  const value = {
    data: filteredData,
    handlerMap: {
      updateName: ({ name }) => {
        setData((current) => {
          current.name = name;
          return { ...current };
        });
      },
      addItem: () => {
        setData((current) => {
          current.itemList.push({
            id: Math.random(),
            name: "",
            resolved: false,
          });
          return { ...current };
        });
      },
      updateItemName: ({ id, name }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            name,
          };
          return { ...current };
        });
      },
      toggleResolveItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            resolved: !current.itemList[itemIndex].resolved,
          };
          return { ...current };
        });
      },
      deleteItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList.splice(itemIndex, 1);
          return { ...current };
        });
      },
      addMember: ({ memberId }) => {
        setData((current) => {
          if (!current.memberList.includes(memberId))
            current.memberList.push(memberId);
          return { ...current };
        });
      },
      removeMember: ({ memberId }) => {
        setData((current) => {
          const memberIndex = current.memberList.findIndex(
            (item) => item === memberId
          );
          if (memberIndex > -1) current.memberList.splice(memberIndex, 1);
          return { ...current };
        });
      },
    },
    showResolved,
    toggleShowResolved: () => setShowResolved((current) => !current),
  };

  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider;
