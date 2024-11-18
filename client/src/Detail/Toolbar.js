import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";

import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import UpdateNameForm from "./UpdateNameForm";
import Stack from "react-bootstrap/esm/Stack";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { data, handlerMap } = useContext(DetailContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <Stack className={"p-2"} direction="horizontal" gap={2}>
      <UpdateNameForm show={show} handleClose={() => setShow(false)} data={data} handlerMap={handlerMap} />
      <h4>{data.name}</h4>
      {loggedInUser === data.owner ? (
        <Button size="sm" onClick={() => setShow(true)}>
          <Icon path={mdiPencil} size={1} />
        </Button>
      ) : null}
    </Stack>
  );
}

export default Toolbar;
