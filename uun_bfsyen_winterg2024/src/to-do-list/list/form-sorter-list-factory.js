//@@viewOn:imports
import { createVisualComponent, useLsi } from "uu5g05";
import { ControllerProvider } from "uu5tilesg02";
import { FormSorterManager } from "uu5tilesg02-controls";
import Config from "./config/config.js";
//@@viewOff:imports

class FormSorterListFactory {
  static generate(getSorterDefinitionList, importLsi, lsiPath) {
    return createVisualComponent({
      //@@viewOn:statics
      uu5Tag: Config.TAG + "FormSorterList",
      //@@viewOff:statics

      //@@viewOn:propTypes
      propTypes: {},
      //@@viewOff:propTypes

      //@@viewOn:defaultProps
      defaultProps: {},
      //@@viewOff:defaultProps

      render(props) {
        //@@viewOn:private
        const { initialValue, ...propsToPass } = props;
        const viewLsi = useLsi(importLsi, lsiPath);
        //@@viewOff:private

        //@@viewOn:render
        return (
          <ControllerProvider sorterDefinitionList={getSorterDefinitionList(viewLsi)} sorterList={initialValue}>
            <FormSorterManager {...propsToPass} />
          </ControllerProvider>
        );
        //@@viewOff:render
      },
    });
  }
}

//@@viewOn:exports
export { FormSorterListFactory };
export default FormSorterListFactory;
//@@viewOff:exports
