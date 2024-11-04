//@@viewOn:imports
import { createVisualComponent, PropTypes, useLsi, useUpdateEffect, useRouteParams, Utils } from "uu5g05";
import { ContentContainer, useAlertBus } from "uu_plus4u5g02-elements";
import { ControllerProvider } from "uu5tilesg02";
import { FilterButton, SorterButton } from "uu5tilesg02-controls";
import Content from "./content.js";
import useToDoListList from "../use-to-do-list-list.js";
import FormFilterListFactory from "./form-filter-list-factory.js";
import FormSorterListFactory from "./form-sorter-list-factory.js";
import Config from "./config/config.js";
import importLsi from "../../lsi/import-lsi.js";
//@@viewOff:imports

//@@viewOn:helpers
// TODO UunBfsyenWinterg2024.ToDoList.List - update.
// https://uuapp.plus4u.net/uu-bookkit-maing01/6a252bf57cdd425f87798cb9be49e5e8/book/page?code=SerieListAndColumnList
function getSerieList(viewLsi) {
  return [
    {
      value: "name",
      label: "name",
      dataItem: ({ data: entityDto }) => entityDto.data.name,
    },
    {
      value: "owner",
      label: "owner",
      dataItem: ({ data: entityDto }) => entityDto.data.owner,
    },
  ];
}

// TODO UunBfsyenWinterg2024.ToDoList.List - update.
// https://uuapp.plus4u.net/uu-bookkit-maing01/6a252bf57cdd425f87798cb9be49e5e8/book/page?code=FilteringInitialSettings
function getFilterDefinitionList(viewLsi) {
  return [
    {
      key: "showActiveOnly",
      label: viewLsi.showActiveOnly,
      inputType: "bool",
      filter: (row, value) => {
        if (value) return row.data.state === "active";
        else return true;
      },
    },
    {
      key: "name",
      label: "name",
      inputType: "text",
      filter: (row, value) => {
        let fragments = value.split(/[\s,.-;:_]/);
        return fragments.some((frag) => {
          let itemValue =
            typeof row?.data.name === "object" ? Utils.Language.getItem(row?.data.name) : row?.data.name || "";
          return itemValue.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
        });
      },
    },
  ];
}

// TODO UunBfsyenWinterg2024.ToDoList.List - update.
// https://uuapp.plus4u.net/uu-bookkit-maing01/6a252bf57cdd425f87798cb9be49e5e8/book/page?code=SortingInitialSettings
function getSorterDefinitionList(viewLsi) {
  return [{ key: "yourSorterItem", label: "name", sort: (a, b) => a.data.name.localeCompare(b.data.name) }];
}
//@@viewOff:helpers

const View = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "View",
  nestingLevel: ContentContainer.getComponentNestingLevel(Content.nestingLevel),
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    ...ContentContainer.getComponentPropTypes(Content.nestingLevel),
    onItemClick: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    ...ContentContainer.getComponentDefaultProps(Content.nestingLevel),
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { onItemClick, ...propsToPass } = props;
    const { showError } = useAlertBus(importLsi);
    const { toDoListDataList, filterList, sorterList, setFilterList, setSorterList } = useToDoListList();
    const [, setParams] = useRouteParams();
    const viewLsi = useLsi(importLsi, [View.uu5Tag]);

    const serieList = getSerieList(viewLsi);
    const filterDefinitionList = getFilterDefinitionList(viewLsi);
    const sorterDefinitionList = getSorterDefinitionList(viewLsi);

    useUpdateEffect(() => setParams({ filterList, sorterList }), [filterList, sorterList]);

    const handleFilterChange = async (event) => {
      setFilterList(event.data.filterList);
    };

    const handleSorterChange = async (event) => {
      setSorterList(event.data.sorterList);
    };

    const handleLoad = async (event) => {
      const { filterList, sorterList } = event.data;

      setFilterList(filterList);
      setSorterList(sorterList);
    };

    const handleLoadNext = async ({ indexFrom }) => {
      try {
        await toDoListDataList.handlerMap.loadNext({
          pageSize: toDoListDataList.pageSize,
          pageIndex: Math.floor(indexFrom / toDoListDataList.pageSize),
        });
      } catch (error) {
        showError(error);
      }
    };

    const actionList = [{ component: FilterButton }, { component: SorterButton }];

    const { containerProps } = ContentContainer.splitProps(propsToPass, {
      title: "List title",
      subtitle: viewLsi.subtitle,
      info: viewLsi.info,
    });
    //@@viewOff:private

    //@@viewOn:render
    return (
      <>
        <ControllerProvider
          data={toDoListDataList.data}
          serieList={serieList}
          filterDefinitionList={filterDefinitionList}
          sorterDefinitionList={sorterDefinitionList}
          filterList={filterList}
          sorterList={sorterList}
          onFilterChange={handleFilterChange}
          onSorterChange={handleSorterChange}
        >
          <ContentContainer
            {...containerProps}
            nestingLevelList={Content.nestingLevel}
            actionList={actionList}
            lsiError={{ import: importLsi, path: ["Errors"] }}
            dataMap={{
              toDoListList: { dataObject: toDoListDataList },
            }}
          >
            {({ padding, nestingLevel }) => (
              <Content
                padding={padding}
                nestingLevel={nestingLevel}
                onLoad={handleLoad}
                onLoadNext={handleLoadNext}
                onItemClick={onItemClick}
              />
            )}
          </ContentContainer>
        </ControllerProvider>
      </>
    );
    //@@viewOff:render
  },
});

const FormFilterList = FormFilterListFactory.generate(getFilterDefinitionList, importLsi, [View.uu5Tag]);
const FormSorterList = FormSorterListFactory.generate(getSorterDefinitionList, importLsi, [View.uu5Tag]);

//@@viewOn:exports
export { View, FormFilterList, FormSorterList };
export default View;
//@@viewOff:exports
