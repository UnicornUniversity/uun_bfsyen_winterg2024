//@@viewOn:imports
import { createVisualComponent, useLsi } from "uu5g05";
import { ControllerProvider } from "uu5tilesg02";
import { FormFilterManager } from "uu5tilesg02-controls";
import Config from "./config/config.js";
//@@viewOff:imports

class FormFilterListFactory {
  static generate(getFilterDefinitionList, importLsi, lsiPath) {
    return createVisualComponent({
      //@@viewOn:statics
      uu5Tag: Config.TAG + "FormFilterList",
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
          <ControllerProvider filterDefinitionList={getFilterDefinitionList(viewLsi)} filterList={initialValue}>
            <FormFilterManager {...propsToPass} />
          </ControllerProvider>
        );
        //@@viewOff:render
      },
    });
  }
}

//@@viewOn:exports
export { FormFilterListFactory };
export default FormFilterListFactory;
//@@viewOff:exports
