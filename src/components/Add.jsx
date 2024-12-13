import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../assets/img.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className='mb-2'>
        <Button className='shadow' onClick={handleShow} variant='success'>
          <i class="fa-solid fa-plus"></i> New Project
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>New Projet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={5}>
              <label >
                <input type="file" style={{ display: 'none' }} />
                <img style={{height:'320px'}} src={img} alt="" />
              </label>
            </Col>
            <Col lg={7} className='p-2'>
              <form action="">

                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Project title"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>


                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Language Used"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>


                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Github link"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Project Website"
                  className="mb-3"
                  style={{fontSize:'13px'}}
                >
                  <Form.Control placeholder="Leave a comment here" />
                </FloatingLabel>


              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add