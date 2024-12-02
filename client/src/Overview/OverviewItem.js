import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useNavigate, createSearchParams } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiEyeOutline } from "@mdi/js";

function OverviewItem({ toDoList }) {
  const navigate = useNavigate();

  const toDoListNotResolved = toDoList.itemList.filter(
    (item) => !item.resolved
  );

  return (
    <Stack direction="horizontal" gap={1}>
      <div>{toDoList.name}</div>
      <Button
        variant="light"
        path={mdiEyeOutline}
        className="text-primary ms-auto p-1"
        size="sm"
        onClick={() =>
          navigate({
            search: createSearchParams({ id: toDoList.id }).toString(),
          })
        }
      >
        <Icon path={mdiEyeOutline} size={0.8} />{" "}
        <Badge bg="danger">{toDoListNotResolved.length}</Badge>
        <Badge bg="primary">{toDoList.itemList.length}</Badge>
      </Button>
    </Stack>
  );
}

export default OverviewItem;
