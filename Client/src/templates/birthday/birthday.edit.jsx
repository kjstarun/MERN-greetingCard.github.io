import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Birthday from "./birthday";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDescription,
  updateHeading,
  updateSignature,
} from "../../redux/features/birthdaySlice";

const BirthdayEdit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { heading, description, signature } = useSelector(
    (state) => state.birthdaySlice
  );

  const dispatch = useDispatch();

  const [localDescription, setLocalDescription] = useState("");
  const [localHeading, setLocalHeading] = useState("");
  const [localSignature, setLocalSignature] = useState("");

  const handleDecription = (value) => {
    setLocalDescription(value);
    dispatch(updateDescription(value));
  };
  const handleHeading = (value) => {
    setLocalHeading(value);
    dispatch(updateHeading(value));
  };
  const handleSignature = (value) => {
    setLocalSignature(value);
    dispatch(updateSignature(value));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="edit-button">
        Click to edit
      </Button>
      <Button variant="primary" className="save-button">
        Click to save
      </Button>
      <Modal show={show} onHide={handleClose} style={{ float: "right" }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your own template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3 d-flex" style={{ gap: "20px" }}>
            <Form.Control
              placeholder="Name / Heading / Quote"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={localHeading}
              onChange={(e) => handleHeading(e.target.value)}
            />
            <FloatingLabel controlId="floatingTextarea2" label="Decription">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                value={localDescription}
                onChange={(e) => handleDecription(e.target.value)}
              />
            </FloatingLabel>
            <Form.Control
              placeholder="Signature"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={localSignature}
              onChange={(e) => handleSignature(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Preview Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Birthday />
    </>
  );
};

export default BirthdayEdit;
