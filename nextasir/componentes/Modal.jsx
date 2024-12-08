'use client';

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { redirect } from 'next/navigation';


function ModalComponent({ title, bodyContent, secondaryButtonText }) {
  
  const [show, setShow] = useState(false);
   useEffect(() => {
       setShow(true)
     }, [])
     /* redirige al usaurio a la ruta pokemon cuando se cierra  */
  const handleClose = () => redirect("/pokemon");
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} size="lg" onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{bodyContent}</Modal.Body>
      <Modal.Footer>
        <Link href="/pokemon" passHref>
          <Button variant="secondary" onClick={handleClose}> {secondaryButtonText} </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
