import Offcanvas from "react-bootstrap/Offcanvas";

import ToDoListOverviewList from "./OverviewList.js";
import Toolbar from "./Toolbar.js";

function Overview({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} responsive="md">
      <Offcanvas.Header closeButton />
      <Offcanvas.Body className={"d-block"}>
        <Toolbar />
        <ToDoListOverviewList />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Overview;
