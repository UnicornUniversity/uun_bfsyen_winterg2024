import { useContext, useEffect, useRef } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { OverviewContext } from "./OverviewProvider.js";

function CreateForm({ onClose }) {
  const { state, handlerMap } = useContext(OverviewContext);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (state === "ready") onClose();
    }
  }, [state]);

  return (
    <Modal show={true} onHide={onClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          handlerMap.handleCreate({ name: values.name });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create ToDoList</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            disabled={state === "pending"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={onClose}
            disabled={state === "pending"}
          >
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={state === "pending"}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CreateForm;
