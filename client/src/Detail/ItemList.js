import { useContext } from "react";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/esm/Button";
// import { useTranslation } from "react-i18next";

import Icon from "@mdi/react";
import { mdiPlusCircleOutline, mdiFilterOutline, mdiFilterOffOutline } from "@mdi/js";

import { DetailContext } from "./DetailProvider";
import Item from "./Item";

function ItemList() {
  const { data, handlerMap, showResolved, toggleShowResolved } = useContext(DetailContext);
  // const { t } = useTranslation();

  return (
    <div className="p-2">
      <Stack direction="horizontal" gap="2">
        <h4>ItemList</h4>
        <Button className="ms-auto" size="sm" variant="success" onClick={() => handlerMap.addItem()}>
          <Icon path={mdiPlusCircleOutline} size={0.7} /> Add
        </Button>
        <Button size="sm" onClick={() => toggleShowResolved()}>
          <Icon path={showResolved ? mdiFilterOutline : mdiFilterOffOutline} size={0.7} />
        </Button>
      </Stack>
      <div className="p-2">
        {data.itemList.map((item) => (
          <Item key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
