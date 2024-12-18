import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiCheckboxOutline,
  mdiCheckboxBlankOutline,
} from "@mdi/js";

import { DetailContext } from "./DetailProvider";

function Item({ data, handlerMap }) {
  const [value, setValue] = useState(data.name);
  const { state, itemId } = useContext(DetailContext);

  return (
    <Stack direction="horizontal" gap={2} className="p-1">
      <Button
        className="p-1"
        variant="light"
        onClick={() => handlerMap.toggleResolveItem({ id: data.id })}
        disabled={state === "pending" && itemId === data.id}
      >
        <Icon
          className={data.resolved ? "text-success" : "text-primary"}
          path={data.resolved ? mdiCheckboxOutline : mdiCheckboxBlankOutline}
          size={1}
        />
      </Button>
      <Form.Control
        className="me-auto"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
        disabled={state === "pending" && itemId === data.id}
      />
      <Button
        className="p-1"
        variant="light"
        onClick={() => handlerMap.deleteItem({ id: data.id })}
      >
        <Icon className="text-danger" path={mdiDeleteOutline} size={1} />
      </Button>
    </Stack>
  );
}

export default Item;
