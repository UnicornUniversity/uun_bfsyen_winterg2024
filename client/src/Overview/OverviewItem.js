import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useNavigate, createSearchParams } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiEyeOutline, mdiCloseCircleOutline, mdiDeleteOutline } from "@mdi/js";

import { UserContext } from "../Users/UserProvider.js";
import { OverviewContext } from "./OverviewProvider.js";

function OverviewItem({ toDoList }) {
  const { handlerMap } = useContext(OverviewContext);

  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Stack direction="horizontal" gap={1}>
      <div>{toDoList.name}</div>
      <Button
        variant="light"
        path={mdiEyeOutline}
        className="text-primary ms-auto p-1"
        size="sm"
        onClick={() => navigate({ search: createSearchParams({ id: toDoList.id }).toString() })}
      >
        <Icon path={mdiEyeOutline} size={0.8} />
      </Button>
      {loggedInUser === toDoList.owner ? (
        <>
          <Button
            variant="light"
            className="text-warning p-1"
            size="sm"
            onClick={() => handlerMap.handleArchive({ id: toDoList.id })}
          >
            <Icon path={mdiCloseCircleOutline} size={0.8} />
          </Button>
          <Button
            variant="light"
            className=" p-1"
            size="sm"
            onClick={() => handlerMap.handleDelete({ id: toDoList.id })}
          >
            <Icon className="text-danger" path={mdiDeleteOutline} size={0.8} />
          </Button>
        </>
      ) : null}
    </Stack>
  );
}

export default OverviewItem;
