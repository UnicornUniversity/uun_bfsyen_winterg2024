import { useContext, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useTranslation } from "react-i18next";

import { DetailContext } from "./DetailProvider";
import Spinner from "react-bootstrap/esm/Spinner";

function UpdateNameForm({ show, handleClose }) {
  const { state, data, error, handlerMap } = useContext(DetailContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (state === "ready") handleClose();
  }, [state]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          handlerMap.handleUpdate({ id: data.id, name: values.name });
          // handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {state === "error" ? (
            <Alert variant={"danger"}>
              {t(`errors.${error.code || "noCode"}`)}
            </Alert>
          ) : null}
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={data.name}
            required
            disabled={state === "pending"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={state === "pending"}
          >
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={state === "pending"}
          >
            {state === "pending" ? <Spinner /> : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UpdateNameForm;
