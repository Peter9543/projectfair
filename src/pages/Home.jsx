import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import projectImg from '../assets/project.png'
import CardItems from '../components/CardItems';
import Card from 'react-bootstrap/Card';



function Home() {
  return (
    <>
      <Container >
        <div className='m-2 mb-5'>
          <Row style={{ marginTop: '120px' }}>
            <Col lg={6} md={12} sm={12} className='mb-5'>
              <div style={{ textAlign: 'justify' }}>
                <h1 className='' style={{ color: 'green' }}>Project Fair</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati aliquam hic? Doloremque at ratione necessitatibus eius id aliquid, eveniet nulla laboriosam. Magnam repellat eligendi numquam error, </p>
                <Button variant="success">Start to Explore</Button>
              </div>
            </Col>
            <Col>
              <div className='justify-content-start' style={{ height: '100%', width: '100%' }}>
                <img style={{ width: '100%' }} className='img-fluid' src={projectImg} alt="" />
              </div>
            </Col>
          </Row>
        </div >

        <Row className='mt-5 d-flex flex-colum justify-content-center align-items-center text-center mb-5'>
          <div>
            <h2 style={{ color: 'green' }} className=' fs-1'>Explore Our Projects</h2>
          </div>
          <marquee>
            <div className='d-flex'>
              <div>
                <CardItems />
              </div>
            </div>
          </marquee>

        </Row>


        <Row>
          <div className='text-center text-success'>
            <h1>Our Testimonial</h1>
          </div>
          <div>
            <div className='d-flex row m-5'>
              <div className='col'>
                <Card style={{ width: '14rem' }} className='text-center d-flex justify-content-center m-2 shadow'>
                  <div className='d-flex justify-content-center mt-3' style={{  borderRadius: '50%' }}>
                    <Card.Img className='roundedCircle d-flex justify-content-center' style={{ height: '100%', width: '50%', borderRadius: '50%' }} variant="top" src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg" roundedCircle />
  
                  </div>               
                  <Card.Body>
                    <Card.Title>Max miller</Card.Title>
                    <p className='text-warning'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </p>
                    <Card.Text>
                      Some quick example text to build on the card 
                    </Card.Text>
  
                  </Card.Body>
                </Card>
              </div>

             <div className='col'>
                <Card style={{ width: '14rem' }} className='text-center d-flex justify-content-center m-2'>
                  <div className='d-flex justify-content-center mt-3' style={{ height: '100%', width: '100%', borderRadius: '50%' }}>
                    <Card.Img className='roundedCircle d-flex justify-content-center' style={{ height: '100%', width: '50%', borderRadius: '50%' }} variant="top" src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg" roundedCircle />
  
                  </div>               
                  <Card.Body>
                    <Card.Title>Max miller</Card.Title>
                    <p className='text-warning'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </p>
                    <Card.Text>
                      Some quick example text to build on the card 
                    </Card.Text>
  
                  </Card.Body>
                </Card>
             </div>

              <div className='col'>
                <Card style={{ width: '14rem' }} className='text-center d-flex justify-content-center m-2'>
                  <div className='d-flex justify-content-center mt-3' style={{ height: '100%', width: '100%', borderRadius: '50%' }}>
                    <Card.Img className='roundedCircle d-flex justify-content-center' style={{ height: '100%', width: '50%', borderRadius: '50%' }} variant="top" src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg" roundedCircle />
  
                  </div>               
                  <Card.Body>
                    <Card.Title>Max miller</Card.Title>
                    <p className='text-warning'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </p>
                    <Card.Text>
                      Some quick example text to build on the card 
                    </Card.Text>
  
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Row>

        
      </Container>
    </>
  )
}

export default Home