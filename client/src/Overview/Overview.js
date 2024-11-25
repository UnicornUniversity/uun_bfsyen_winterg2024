import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Alert from "react-bootstrap/Alert";
import { useTranslation } from "react-i18next";

import ToDoListOverviewList from "./OverviewList.js";
import Toolbar from "./Toolbar.js";
import { OverviewContext } from "./OverviewProvider.js";

function Overview({ show, handleClose }) {
  const { state, error } = useContext(OverviewContext);
  const { t } = useTranslation();

  return (
    <Offcanvas show={show} onHide={handleClose} responsive="md">
      <Offcanvas.Header closeButton />
      <Offcanvas.Body className={"d-block"}>
        <Toolbar />
        {state === "error" ? (
          <Alert variant={"danger"}>{t(`errors.${error.code}`)}</Alert>
        ) : null}
        <ToDoListOverviewList />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Overview;
