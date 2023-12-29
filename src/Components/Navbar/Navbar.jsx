
import React from 'react';
import { Navbar, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../Navbar/Navbar.css'
import { CiMail } from "react-icons/ci";
import { MdOutlinePhonePaused } from "react-icons/md";

export default function Header() {

  return (
    <>
    <Container fluid >
      <Row style={{ backgroundColor: "#3B7FBF" }} className=' py-2 d-none d-md-flex'>
        <Col md={7} className='text-start text-light'>
          <div className='d-flex gap-5 mt-2'>
            <p className='fs-6'><CiMail  size={25}/>razobyte1012@gmail.com</p>
            <p><MdOutlinePhonePaused  size={25}/> +91-9559870325</p>
          </div>
        </Col>
        <Col md={4} className='d-flex justify-content-end'>
          <Button className='Btn' variant='light'>Book your free  session</Button>
        </Col>
      </Row>
    </Container>


      <Navbar style={{ backgroundColor: "#FFFFF" }} variant="light" sticky="bottom" expand="lg">
        <Container fluid style={{ marginLeft: "2rem" }} className='gap-2'>
          <NavbarBrand href="/#">
            <Image
              src="https://razobyte.com/wp-content/uploads/2023/11/Razobyte-Softtech-Logo.jpg"
              alt=""
              style={{ width: '250px', height: 'auto' }} />

          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" style={{ marginRight: "10px" }} />
          <NavbarCollapse id="responsive-navbar-nav " >
            <Nav className="fs-5 gap-5 ">
              <NavLink href='/' style={{ marginLeft: "1em", color: "white" }} active>Home</NavLink>
              <NavLink href='/about' style={{ marginLeft: "1em", color: "white" }}>About</NavLink>
              <NavLink href='/services' style={{ marginLeft: "1em", color: "white" }}>Services</NavLink>
              <NavLink href='/services' style={{ marginLeft: "1em", color: "white" }}>Portfolio</NavLink>
              <NavLink href='/login' style={{ marginLeft: "1em", color: "white" }}>Get in Touch</NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>


    </>
  );
}
