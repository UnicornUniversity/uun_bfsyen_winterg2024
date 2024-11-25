import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

function Member({ data, handlerMap, isOwner, showRemoveButton }) {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className={
        "p-1 py-0 m-1 my-0 border rounded" +
        (isOwner ? " bg-primary text-white" : "")
      }
      style={{ width: "max-content", height: "100%" }}
    >
      {data?.name}
      {showRemoveButton ? (
        <Button
          size="sm"
          className="p-1"
          variant="light"
          onClick={() => handlerMap.removeMember({ memberId: data?.id })}
        >
          <Icon className="text-danger" path={mdiDeleteOutline} size={0.8} />
        </Button>
      ) : null}
    </Stack>
  );
}

export default Member;
