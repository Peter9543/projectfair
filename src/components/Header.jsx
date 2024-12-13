import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
   <div>
    <div>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'}><i class="fa-brands fa-phoenix-squadron"></i></Link>
           Project Fair
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
   </div>
   </>
  )
}

export default Header