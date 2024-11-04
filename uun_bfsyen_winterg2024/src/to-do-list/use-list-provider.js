//@@viewOn:imports
import { useDataList, useMemo, useValueChange } from "uu5g05";
import { useSubApp } from "uu_plus4u5g02";
//@@viewOff:imports

function useListProvider({ baseUri, skipInitialLoad = false, ...criteria }) {
  const [filterList, setFilterList] = useValueChange(criteria.filterList ?? [], criteria.onFilterListChange);
  const [sorterList, setSorterList] = useValueChange(criteria.sorterList ?? [], criteria.onSorterListChange);
  const subApp = useSubApp();

  baseUri = baseUri ?? subApp.baseUri;
  const canLoad = baseUri ? true : false;

  const toDoListDataList = useDataList(
    {
      skipInitialLoad: baseUri ? skipInitialLoad : false,
      handlerMap: {
        load: canLoad ? handleLoad : undefined,
      },
    },
    [baseUri, filterList, sorterList],
  );

  function handleLoad({ pageInfo } = {}) {
    return [
      {
        id: "td01",
        name: "První úkolovník",
        state: "active",
        owner: "u1",
        memberList: ["u2"],
      },
      {
        id: "td02",
        name: "Druhý úkolovník",
        state: "archived",
        owner: "u1",
        memberList: ["u2", "u3"],
      },
      {
        id: "td03",
        name: "Třetí úkolovník",
        state: "active",
        owner: "u3",
        memberList: [],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
      {
        id: "td04",
        name: "čtvrtý úkolovník",
        state: "archived",
        owner: "u2",
        memberList: ["u1"],
      },
    ];
  }

  const value = useMemo(
    () => ({ toDoListDataList, baseUri, filterList, sorterList, setFilterList, setSorterList }),
    [toDoListDataList, baseUri, filterList, sorterList, setFilterList, setSorterList],
  );

  return value;
}

//@@viewOn:exports
export { useListProvider };
export default useListProvider;
//@@viewOff:exports
