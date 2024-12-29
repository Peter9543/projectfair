import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import autherImg from '../assets/auther2.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { registerApi } from '../../Services/allApi';





function Auth({ insideRegister }) {

  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
  console.log(userDetails)

  // sign up
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('User details:', userDetails); // Debugging log
    if (userDetails.username && userDetails.email && userDetails.password) {
      try {
        const result = await registerApi(userDetails);
        console.log('Registration result:', result);
        // toast.success("Registration successful!");

        if(result.status==200){
          toast.success(`welcome ${result?.username}...please login to explore our website`)
          setUserDetails({username:"",email:"",password:""})
        }else{
          if(result.status=400){
            toast.warning(result.response.data)
            sestUserDetails({username:"",email:"",password:""})
          }
        }
      } catch (err) {
        console.error('Error during registration:', err);
      
      }
    } else {
      toast.warning("Please fill out all fields completely.");
    }
  };
  

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
                    <Form.Control
                      type="text" // Change type to "text" for username
                      placeholder="Enter your username"
                      onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                      value={userDetails.username}
                    />
                  </FloatingLabel>}



                <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3 w-100" style={{ fontSize: '14px' }}>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                    value={userDetails.email}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3 w-100" style={{ fontSize: '14px' }}>
                  <Form.Control
                    type="password" // Change type to "password" for password
                    placeholder="Enter your password"
                    onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
                    value={userDetails.password}
                  />
                </FloatingLabel>


                {
                  insideRegister ?
                    <div >
                      <Button onClick={handleRegister} className='btn btn-success text-center'>sing up</Button>
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


        <ToastContainer
          position="top-center"
          autoClose={2000}

          theme="colored"

        />


      </div>
    </>
  )
}

export default Auth