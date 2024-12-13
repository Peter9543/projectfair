import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'



function Dashboard() {
  return (
    <>
      <Header />

      <Row className='m-5'>
        <Col lg={8}>
          <div>
            <h3>Welcome <span className='text-success'>User</span></h3>
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