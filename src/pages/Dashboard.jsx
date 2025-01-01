import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'



function Dashboard() {

  const [userName,setUserName]=useState("")
  console.log(userName)

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUserName(JSON.parse(sessionStorage.getItem("user")).username)
    }else{
      setUserName("")
    }
  })

  return (
    <>
      <Header />

      <Row className='m-5'>
        <Col lg={8}>
          <div>
            
            <h3>Welcome <span className='text-success'>{userName.split(" ")[0]}</span></h3>
          </div>
          <div>
            <View/>
          </div>

        </Col>
        <Col lg={4}>
          <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard