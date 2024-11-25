import { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useSearchParams } from "react-router-dom";

import { OverviewContext } from "./OverviewProvider.js";
import OverviewItem from "./OverviewItem";

function OverviewList() {
  const { data } = useContext(OverviewContext);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");

  return (
    <ListGroup>
      {!data
        ? "není co zobrazit"
        : data.length
        ? data.map((toDoList) => (
            <ListGroup.Item
              key={toDoList.id}
              active={selectedId === toDoList.id}
              variant={toDoList.state === "active" ? "primary" : "dark"}
            >
              <OverviewItem toDoList={toDoList} />
            </ListGroup.Item>
          ))
        : "list je prázdný"}
    </ListGroup>
  );
}

export default OverviewList;
