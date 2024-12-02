import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/Spinner";
import Placeholder from "react-bootstrap/Placeholder";

import Icon from "@mdi/react";
import {
  mdiPencil,
  mdiReload,
  mdiAlert,
  mdiCloseCircleOutline,
  mdiDeleteOutline,
} from "@mdi/js";

import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import UpdateNameForm from "./UpdateNameForm";
import Stack from "react-bootstrap/esm/Stack";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { state, data, handlerMap } = useContext(DetailContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <Stack className={"p-2"} direction="horizontal" gap={2}>
      {data ? (
        <UpdateNameForm
          show={show}
          handleClose={() => setShow(false)}
          data={data}
          handlerMap={handlerMap}
        />
      ) : null}
      {!data ? (
        <Placeholder as="h4" xs="6" animation={"glow"}>
          <Placeholder xs="12" />
        </Placeholder>
      ) : null}
      <h4>{data ? data.name : null}</h4>
      {loggedInUser === data?.owner ? (
        <>
          <Button size="sm" className="p-1" onClick={() => setShow(true)}>
            <Icon path={mdiPencil} size={1} />
          </Button>
          <Button
            variant="warning"
            className="p-1"
            size="sm"
            onClick={() =>
              handlerMap.handleUpdate({ id: data.id, state: "archived" })
            }
          >
            <Icon path={mdiCloseCircleOutline} size={1} />
          </Button>
          <Button
            variant="danger"
            className="p-1"
            size="sm"
            onClick={() => handlerMap.handleDelete({ id: data.id })}
          >
            <Icon path={mdiDeleteOutline} size={1} />
          </Button>
        </>
      ) : null}
      <Button
        onClick={handlerMap.handleLoad}
        size="sm"
        className="p-1"
        variant={state === "error" ? "danger" : "primary"}
      >
        {state === "pending" ? (
          <Spinner animation="border" role="status" size="sm" />
        ) : state === "error" ? (
          <Icon path={mdiAlert} size={1} />
        ) : (
          <Icon path={mdiReload} size={1} />
        )}
      </Button>
    </Stack>
  );
}

export default Toolbar;
