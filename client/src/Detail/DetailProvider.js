import { createContext, useMemo, useState, useContext, useEffect } from "react";
import { OverviewContext } from "../Overview/OverviewProvider.js";
import { useSearchParams } from "react-router-dom";
import FetchHelper from "../FetchHelper.js";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  // const { data, state, error } = useContext(OverviewContext);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");

  const [detailDataLoader, setDetailDataLoader] = useState({
    state: "ready",
    data: null,
    error: null,
  });

  async function handleLoad() {
    setDetailDataLoader((current) => {
      return {
        ...current,
        state: "pending",
        data: selectedId !== current.data?.id ? null : current.data,
      };
    });
    const result = await FetchHelper().toDoList.get({ id: selectedId });
    setDetailDataLoader((current) => {
      if (result.ok) {
        return {
          ...current,
          state: "ready",
          data: result.data,
          error: null,
        };
      } else {
        return { ...current, state: "error", error: result.data };
      }
    });
  }

  useEffect(() => {
    if (selectedId) handleLoad();
  }, [selectedId]);

  const [showResolved, setShowResolved] = useState(false);

  const filteredData = useMemo(() => {
    if (detailDataLoader.data) {
      const result = { ...detailDataLoader.data };
      if (!showResolved) {
        result.itemList = result?.itemList?.filter((item) => !item.resolved);
      }
      return result;
    } else {
      return undefined;
    }
  }, [detailDataLoader.data, showResolved]);

  const setData = () => {};

  const value = {
    state: detailDataLoader.state,
    error: detailDataLoader.error,
    data: filteredData,
    handlerMap: {
      handleLoad,
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
