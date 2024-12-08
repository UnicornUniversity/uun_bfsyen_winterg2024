import { createContext, useMemo, useState, useEffect, useContext } from "react";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import FetchHelper from "../FetchHelper.js";
import { OverviewContext } from "../Overview/OverviewProvider.js";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  const { handlerMap } = useContext(OverviewContext);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");
  const navigate = useNavigate();

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

  async function handleUpdate(dtoIn, itemId) {
    setDetailDataLoader((current) => {
      return {
        ...current,
        state: "pending",
        itemId: itemId,
      };
    });

    const result = await FetchHelper().toDoList.update(dtoIn);

    setDetailDataLoader((current) => {
      if (result.ok) {
        handlerMap.handleLoad();
        return {
          ...current,
          state: "ready",
          itemId: null,
          data: result.data,
          error: null,
        };
      } else {
        return { ...current, state: "error", error: result.data };
      }
    });
  }

  async function handleDelete(dtoIn, itemId) {
    setDetailDataLoader((current) => {
      return {
        ...current,
        state: "pending",
      };
    });

    const result = await FetchHelper().toDoList.delete(dtoIn);

    setDetailDataLoader((current) => {
      if (result.ok) {
        handlerMap.handleLoad();
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

    navigate({
      search: createSearchParams({}).toString(),
    });
  }

  /* eslint-disable */
  useEffect(() => {
    if (selectedId) handleLoad();
  }, [selectedId]);
  /* eslint-enable */

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

  const value = {
    state: detailDataLoader.state,
    error: detailDataLoader.error,
    itemId: detailDataLoader.itemId,
    data: filteredData,
    handlerMap: {
      handleLoad,
      handleUpdate,
      handleDelete,
      addItem: () => {
        setDetailDataLoader((current) => {
          current.data.itemList.push({
            id: Math.random(),
            name: "",
            resolved: false,
          });
          return JSON.parse(JSON.stringify(current));
        });
      },
      updateItemName: ({ id, name }) => {
        const itemIndex = detailDataLoader.data.itemList.findIndex(
          (item) => item.id === id
        );
        detailDataLoader.data.itemList[itemIndex] = {
          ...detailDataLoader.data.itemList[itemIndex],
          name,
        };
        handleUpdate(
          {
            id: detailDataLoader.data.id,
            itemList: detailDataLoader.data.itemList,
          },
          id
        );
      },
      toggleResolveItem: ({ id }) => {
        const itemIndex = detailDataLoader.data.itemList.findIndex(
          (item) => item.id === id
        );
        detailDataLoader.data.itemList[itemIndex].resolved =
          !detailDataLoader.data.itemList[itemIndex].resolved;
        handleUpdate(
          {
            id: detailDataLoader.data.id,
            itemList: detailDataLoader.data.itemList,
          },
          id
        );
      },
      deleteItem: ({ id }) => {
        const itemIndex = detailDataLoader.data.itemList.findIndex(
          (item) => item.id === id
        );
        detailDataLoader.data.itemList.splice(itemIndex, 1);
        handleUpdate(
          {
            id: detailDataLoader.data.id,
            itemList: detailDataLoader.data.itemList,
          },
          id
        );
      },
      addMember: ({ memberId }) => {
        if (!detailDataLoader.data.memberList.includes(memberId))
          detailDataLoader.data.memberList.push(memberId);
        handleUpdate({
          id: detailDataLoader.data.id,
          memberList: detailDataLoader.data.memberList,
        });
      },
      removeMember: ({ memberId }) => {
        const memberIndex = detailDataLoader.data.memberList.findIndex(
          (item) => item === memberId
        );
        if (memberIndex > -1)
          detailDataLoader.data.memberList.splice(memberIndex, 1);
        handleUpdate({
          id: detailDataLoader.data.id,
          memberList: detailDataLoader.data.memberList,
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
