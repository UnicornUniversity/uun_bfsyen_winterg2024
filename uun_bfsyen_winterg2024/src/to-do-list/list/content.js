//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useMemo, withStickyTop } from "uu5g05";
import { useController } from "uu5tilesg02";
import { List } from "uu5tilesg02-elements";
import { FilterBar, SorterBar, SorterManagerModal, FilterManagerModal } from "uu5tilesg02-controls";
import Config from "./config/config.js";
import Tile from "./tile.js";
import Cell from "./cell.js";
//@@viewOff:imports

export const Content = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Content",
  nestingLevel: ["area", "inline"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    rowCount: PropTypes.number,
    onLoadNext: PropTypes.func.isRequired,
    onItemClick: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { ref, style } = withStickyTop();
    const { onItemClick, onGetItemActionList, onLoadNext, padding, rowCount, nestingLevel, ...elementProps } = props;
    const { serieList } = useController();

    const currentNestingLevel = Utils.NestingLevel.getNestingLevel({ nestingLevel }, Content);
    const attrs = Utils.VisualComponent.getAttrs(elementProps);

    const columnList = useMemo(() => {
      const CellWrapper = (cellProps) => <Cell {...cellProps} onClick={onItemClick} />;

      return serieList.map((serie) => ({ value: serie.value, cellComponent: CellWrapper }));
    }, [onItemClick, serieList]);

    const TileWrapper = useMemo(() => {
      return (tileProps) => <Tile {...tileProps} headerOverlap={false} onClick={onItemClick} />;
    }, [onItemClick]);

    const isItemClickAllowed = onItemClick?.constructor === Function;
    //@@viewOff:private

    //@@viewOn:render
    if (currentNestingLevel === "inline") {
      return null;
    }

    return (
      <div {...attrs}>
        <FilterBar
          ref={ref}
          style={{ ...attrs.style, ...style }}
          padding={{ left: padding.left, right: padding.right }}
        />
        <SorterBar padding={{ left: padding.left, right: padding.right }} />
        <List
          verticalAlignment="center"
          onLoad={onLoadNext}
          columnList={columnList}
          spacing="loose"
          cellHoverExtent={isItemClickAllowed ? "row" : undefined}
          cellActiveExtent={isItemClickAllowed ? "row" : undefined}
          getActionList={(row) => {
            return [
              { icon: "uugds-close", onClick: () => console.log(row) },
              { icon: "uugds-delete", onClick: () => console.log(row), colorScheme: "negative" },
            ];
          }}
          padding={padding}
        >
          {TileWrapper}
        </List>
        <FilterManagerModal />
        <SorterManagerModal />
      </div>
    );
    //@@viewOff:render
  },
});

export default Content;
