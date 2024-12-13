import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Add from './Add'
// import Table from 'react-bootstrap/Table';
import Edit from './Edit'



function View() {
  return (
    <>
      <div>
        <Row className='d-flex justify-content-between align-items-between'>
          <div className='d-flex justify-content-between align-items-between mt-3'>
            <h4>All Projects</h4>
            <div className='me-5'><Add /></div>
          </div>
        </Row>
        <div className='d-flex w-100 justify-content-between border p-2'>
          <div>
            <h4> Title</h4>
          </div>
          <div className='d-flex w-50 justify-content-between '>
            <div>
              <Edit />
            </div >
            <div className='mt-2'>
            <i class="fa-brands fa-github"></i>
            </div>
            <div className='mt-2'>
            <i class="fa-solid fa-trash "></i>
            </div>
          </div>
        </div>
        <Row>

        </Row>
      </div>
    </>
  )
}

export default View