import { useContext } from "react";
import { DetailContext } from "./Provider";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UpdateNameForm({ show, onHide }) {
  const { data } = useContext(DetailContext);

  return (
    <Modal show={show} onHide={onHide}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          console.log(
            JSON.stringify(Object.fromEntries(new FormData(e.target.form)))
          );
        }}
        defaultValue={{
          name: data.name,
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update ToDo List Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required defaultValue={data.name} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
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

export default UpdateNameForm;
