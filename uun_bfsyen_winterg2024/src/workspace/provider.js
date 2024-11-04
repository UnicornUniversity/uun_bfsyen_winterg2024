//@@viewOn:imports
import { createComponent, PropTypes, useMemo } from "uu5g05";
import { AppWorkspaceProvider, withReusedParentProvider, useSubAppData, withBaseUri } from "uu_plus4u5g02";
import Calls from "calls";
import Config from "./config/config.js";
import useWorkspace, { WorkspaceContext } from "./use-workspace.js";
//@@viewOff:imports

//@@viewOn:helpers
function WorkspaceProvider({ baseUri, children }) {
  const workspaceDto = useSubAppData();
  const value = useMemo(() => ({ workspaceDto, baseUri }), [workspaceDto, baseUri]);
  return (
    <WorkspaceContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </WorkspaceContext.Provider>
  );
}
//@@viewOff:helpers

let Provider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + `Provider`,
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: { baseUri: PropTypes.string },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { baseUri, children } = props;
    const handlerMap = useMemo(
      () => ({
        load() {
          return Calls.Workspace.load(baseUri);
        },
      }),
      [baseUri],
    );
    //@@viewOff:private

    //@@viewOn:render
    return (
      <AppWorkspaceProvider baseUri={baseUri} subApp="uun-bfsyen-winter-maing20" handlerMap={handlerMap}>
        <WorkspaceProvider baseUri={baseUri}>{children}</WorkspaceProvider>
      </AppWorkspaceProvider>
    );
    //@@viewOff:render
  },
});

Provider = withReusedParentProvider(Provider, (props) => {
  const parentValue = useWorkspace();

  if (!parentValue) {
    return;
  }

  if (props.baseUri && props.baseUri !== parentValue.baseUri) {
    return;
  }

  return parentValue;
});

Provider = withBaseUri(Provider);

//@@viewOn:exports
export { Provider };
export default Provider;
//@@viewOff:exports
