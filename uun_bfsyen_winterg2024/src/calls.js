import { Environment } from "uu5g05";
import Plus4U5 from "uu_plus4u5g02";

const Calls = {
  call(method, url, dtoIn, clientOptions) {
    return Plus4U5.Utils.AppClient[method](url, dtoIn, clientOptions);
  },

  getCommandUri(useCase, baseUri = Environment.appBaseUri) {
    return (!baseUri.endsWith("/") ? baseUri + "/" : baseUri) + (useCase.startsWith("/") ? useCase.slice(1) : useCase);
  },

  ToDoList: {
    load(baseUri, dtoIn) {
      const commandUri = Calls.getCommandUri("toDoList/load", baseUri);
      return Calls.call("cmdGet", commandUri, dtoIn);
    },
    list(baseUri, dtoIn) {
      const commandUri = Calls.getCommandUri("toDoList/list", baseUri);
      return Calls.call("cmdGet", commandUri, dtoIn);
    },
  },

  Workspace: {
    load(baseUri, dtoIn) {
      const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/load", baseUri);
      return Calls.call("cmdGet", commandUri, dtoIn);
    },
  },
};

export default Calls;
