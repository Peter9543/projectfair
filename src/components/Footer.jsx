import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
   <>
  <div className='container-fluid bg-light py-2'>

<Row className='p-5'>

  <Col sm={12} md={4}>
    <h4 className='text-success'><i className="fa-solid fa-circle-play" ></i>{' '}Project Fair</h4>
    <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam dignissimos assumenda nostrum praesentium quasi doloremque dolorem voluptatum perspiciatis
      officiis eveniet rem nemo laborum aliquid distinctio, illum beatae saepe ducimus.</p>
  </Col>

  <Col sm={12} md={2} className='text-center'>
    <h4>links</h4>
    <div className='d-flex flex-column text-success justify-content-start align-items-start ms-5'>
      <Link to={'/'} className='text-success' style={{ textDecoration: "none" }}>Home</Link>
      <Link to={'/Auth'} className='text-success' style={{ textDecoration: "none" }}>Auth</Link>
      <Link to={'/dashboard'} className='text-success'  style={{ textDecoration: "none" }}>dashboard</Link>
      <Link to={'/project'} className='text-success'  style={{ textDecoration: "none" }}>project</Link>
    </div>
  </Col>
  <Col sm={12} md={2} className='text-center'>
    <h4>Guides</h4>
    <div className='d-flex flex-column justify-content-start align-items-start ms-3'>
      <Link  className='text-success' to={'https://react.dev/'} style={{ textDecoration: "none" }}>React</Link>
      <Link  className='text-success' to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none" }}>React Bootstrap</Link>
      <Link  className='text-success' to={''} style={{ textDecoration: "none" }}>Watch Router</Link>
    </div>
  </Col>
  <Col sm={12} md={4}>
    <h4>Contact Us</h4>
    <div className='d-flex'>
      <input type="email" placeholder='Enter your Email ID' className='form-control' />
      <Button variant="success" className='ms-2'>Submit</Button>
    </div>
    <div className='d-flex mt-2'>

      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter ms-3"></i>
      <i class="fa-brands fa-instagram ms-3"></i>
      <i class="fa-brands fa-linkedin ms-3"></i>
      <i class="fa-brands fa-github ms-3"></i>
      <i class="fa-solid fa-phone ms-3"></i>

    </div>
  </Col>


</Row>

<h6 className='text-center'>MediaPlayer 2024 @ All Rights Received</h6>

</div>
   </>
  )
}

export default Footer