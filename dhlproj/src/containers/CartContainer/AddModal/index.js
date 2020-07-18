import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddForm from './AddForm';

export default function AddModal({ title, open, setOpen, handleAdd }) {
  const [show, setShow] = useState(open);

  const handleClose = () => { setShow(false); setOpen(false); };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD {title.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddForm handleAdd={handleAdd} title={title} setOpen={setOpen} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}