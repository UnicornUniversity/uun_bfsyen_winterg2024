import { useContext } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { OverviewContext } from "./OverviewProvider.js";

function CreateForm({ onClose }) {
  const { handlerMap } = useContext(OverviewContext);

  return (
    <Modal show={true} onHide={onClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          handlerMap.handleCreate({ name: values.name });
          onClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create ToDoList</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CreateForm;
