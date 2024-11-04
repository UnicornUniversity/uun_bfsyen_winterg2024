//@@viewOn:imports
import { createVisualComponent, withRouteParamsProvider } from "uu5g05";
import DataTypes from "uu_datatypesg01";
import Config from "./config/config.js";
import ListProvider from "./list-provider.js";
import { View, FormFilterList, FormSorterList } from "./list/view.js";
//@@viewOff:imports

let List = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "List",
  nestingLevel: View.nestingLevel,
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    ...View.propTypes,
    baseUri: ListProvider.propTypes.baseUri,
    filterList: ListProvider.propTypes.filterList,
    sorterList: ListProvider.propTypes.sorterList,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    ...View.defaultProps,
    // TODO UunBfsyenWinterg2024.ToDoList.List - update.
    filterList: [{ key: "showActiveOnly", value: true }],
    sorterList: [{ key: "yourSorterItem", ascending: true }],
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { baseUri, filterList, sorterList, ...viewProps } = props;
    //@@viewOff:private

    //@@viewOn:render
    return (
      <ListProvider skipInitialLoad filterList={filterList} sorterList={sorterList}>
        <View {...viewProps} />
      </ListProvider>
    );
    //@@viewOff:render
  },
});

List = withRouteParamsProvider(List, {
  filterList: DataTypes.arrayOf(
    DataTypes.oneOfType([
      // TODO UunBfsyenWinterg2024.ToDoList.List - update.
      DataTypes.exact({ key: DataTypes.oneOf(["showActiveOnly"]), value: DataTypes.bool }),
      // DataTypes.exact({ key: DataTypes.oneOf(["anotherFilterItem"]), value: DataTypes.number }),
    ]),
  ),
  sorterList: DataTypes.arrayOf(
    DataTypes.exact({
      key: DataTypes.string,
      ascending: DataTypes.bool,
    }),
  ),
});

List.FormFilterList = FormFilterList;
List.FormSorterList = FormSorterList;

//@@viewOn:exports
export { List };
export default List;
//@@viewOff:exports
