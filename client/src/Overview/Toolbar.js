import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Spinner from "react-bootstrap/Spinner";

import Icon from "@mdi/react";
import {
  mdiPlusCircleOutline,
  mdiFilterOutline,
  mdiFilterOffOutline,
  mdiReload,
} from "@mdi/js";

import { OverviewContext } from "./OverviewProvider.js";
import CreateForm from "./CreateForm.js";

function Toolbar() {
  const { showArchived, setShowArchived, handlerMap, state } =
    useContext(OverviewContext);
  const [showCreateForm, setShowCreateForm] = useState();

  return (
    <div className={"p-2"}>
      {showCreateForm ? (
        <CreateForm onClose={() => setShowCreateForm(false)} />
      ) : null}
      <Stack direction="horizontal" gap={1}>
        <Button variant="success" onClick={() => setShowCreateForm(true)}>
          <Icon path={mdiPlusCircleOutline} size={1} /> Create
        </Button>
        <Button
          className={"ms-auto"}
          onClick={() => setShowArchived((current) => !current)}
        >
          <Icon
            path={showArchived ? mdiFilterOutline : mdiFilterOffOutline}
            size={1}
          />
        </Button>
        <Button onClick={handlerMap.handleLoad}>
          {state === "pending" ? (
            <Spinner animation="border" role="status" size="sm" />
          ) : (
            <Icon path={mdiReload} size={1} />
          )}
        </Button>
      </Stack>
    </div>
  );
}

export default Toolbar;
