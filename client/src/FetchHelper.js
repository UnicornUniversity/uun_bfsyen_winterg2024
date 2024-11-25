async function Call(baseUri, useCase, dtoIn) {
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
    const response = await fetch(
      `${baseUri}/${useCase}${dtoIn ? `?id=${dtoIn.id}` : ""}`
    );
    const data = await response.json();
    return { ok: response.ok, data };
  }
}

function FetchHelper() {
  const baseUri = "http://localhost:8080";

  return {
    toDoList: {
      get: async (dtoIn) => {
        return await Call(baseUri, "toDoList/get", dtoIn);
      },
      list: async () => {
        return await Call(baseUri, "toDoList/list");
      },
    },
  };
}

export default FetchHelper;
