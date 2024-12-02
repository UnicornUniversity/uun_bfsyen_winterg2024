async function Call(baseUri, useCase, dtoIn, method) {
  const useMock = process.env.REACT_APP_USE_MOCK;

  if (useMock === "true") {
    const baseUri = "http://localhost:3000";
    const response = await fetch(
      `${baseUri}/mock/${useCase}${dtoIn?.id ? `_${dtoIn.id}` : ""}.json`
    );
    const data = await response.json();
    return { ok: response.ok, data };
  } else {
    // return fetch
    let response;
    if (!method || method === "get") {
      response = await fetch(
        `${baseUri}/${useCase}${dtoIn ? `?id=${dtoIn.id}` : ""}`
      );
    } else {
      response = await fetch(`${baseUri}/${useCase}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dtoIn),
      });
    }
    const data = await response.json();
    return { ok: response.ok, data };
  }
}

function FetchHelper() {
  const baseUri = "http://localhost:8080";

  return {
    toDoList: {
      get: async (dtoIn) => {
        return await Call(baseUri, "toDoList/get", dtoIn, "get");
      },
      create: async (dtoIn) => {
        return await Call(baseUri, "toDoList/create", dtoIn, "post");
      },
      update: async (dtoIn) => {
        return await Call(baseUri, "toDoList/update", dtoIn, "post");
      },
      delete: async (dtoIn) => {
        return await Call(baseUri, "toDoList/delete", dtoIn, "post");
      },
      list: async () => {
        return await Call(baseUri, "toDoList/list", null, "get");
      },
    },
  };
}

export default FetchHelper;
