import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import autherImg from '../assets/auther2.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';                        



function Auth({ insideRegister }) {

  const [userDetails,setUserDetails]=useState({username:"",email:"",password:""})

  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <Row className='p-5 d-flex justify-content-center rounded'>
          <div className='row border w-50 h-100  rounded glass-effect' style={{ padding: '1%', backgroundColor: '' }}>
            {/* <Col lg={6}>
              <div style={{ height: '300px', width: '100%' }}> <img className='img-fluid' src={autherImg} alt="" /></div>
            </Col> */}
            <Col lg={6} className='border border-2 p-3 w-100 text-center align-items-center d-flex  flex-column '>
              <div>
                <h2 style={{ color: '#007500' }}>Project Fair</h2>
                <h6 style={{ color: '#007500' }}>Sign {insideRegister ? 'up' : 'in'} to your account</h6>
              </div>

              <form >

                {insideRegister &&
                  <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3 w-100" style={{ fontSize: '14px' }}>
                    <Form.Control type="email" placeholder="name@example.com" onChange={e=>setUserDetails({...userDetails,username:e.target.value})} />
                  </FloatingLabel>}



                <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3 w-100" style={{ fontSize: '14px' }}>
                  <Form.Control type="email" placeholder="name@example.com" onChange={e=>setUserDetails({...userDetails,email:e.target.value})}/>
                </FloatingLabel>



                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3 w-100" style={{ fontSize: '14px' }}>
                  <Form.Control type="email" placeholder="name@example.com" onChange={e=>setUserDetails({...userDetails,password:e.target.value})}/>
                </FloatingLabel>


                {
                  insideRegister ?
                    <div >
                      <Button className='btn btn-success text-center'>sing up</Button>
                      <p>Already have an account ?
                        <span>
                          <Link to={'/login'}>Login</Link>
                        </span>
                      </p>

                    </div>
                    :

                    <div style={{ color: '#007500' }}>
                      <Button className='btn btn-success text-center'>sing in</Button>
                      <p>Don't have an account yet?
                        <span>
                          <Link style={{ color: '#007500' }} to={'/register'}>Register</Link>
                        </span>
                      </p>

                    </div>


                }

              </form>
            </Col>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Auth