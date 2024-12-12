import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ProjectCate from '../assets/ProjectCatolog.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';




function CardItems() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
     <Card style={{ width: '18rem' }} onClick={handleShow} className='m-3 shadow'>
      <Card.Img variant="top" src="https://www.healthtech.dtu.dk/-/media/institutter/sundhedsteknologi/health-tech-newdesign/education/project-catalogue/project_cat_btn.jpg?rw=960&rh=0&hash=7F0932E95EE56356ADA6BA8DE9D5C1DE" />
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>
        
        </Card.Text>
        {/* <Button variant="primary">Go</Button> */}
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <div >
        <Modal.Header  closeButton>
          <Modal.Title className='fw-bold text-success'>Project Details</Modal.Title>
        
          </Modal.Header>
          <Modal.Body>
           <Row>
              <Col>
              <div style={{height:'200px', width:'320px'}}>
                  <img className='img-fluid' src="https://www.healthtech.dtu.dk/-/media/institutter/sundhedsteknologi/health-tech-newdesign/education/project-catalogue/project_cat_btn.jpg?rw=960&rh=0&hash=7F0932E95EE56356ADA6BA8DE9D5C1DE" alt="" />
                  </div>
                  <div>
                  <Button className='m-2' variant="primary"><i class="fa-brands fa-git-alt"></i></Button>
                  <Button variant="primary"><i class="fa-solid fa-link"></i></Button>
                  </div>
                 
              </Col>
              <Col>
              <h1 className='text-success '>Project Name</h1>
              <h5 className='fw-bold' >Language Used:
                  <span className='text-danger'>React,redux toolkit</span>
              </h5>
              <p>
              <span className='fs-5 fw-bold'>Project Overview : </span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit assumenda nobis ipsa aut doloribus tenetur, itaque nemo, optio aliquid quam laboriosam at cum iste dolor fugiat excepturi eum hic voluptas
              </p>
              </Col>
           </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  )
}

export default CardItems