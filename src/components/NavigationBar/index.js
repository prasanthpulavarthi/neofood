import React from 'react'
import { Badge } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineSearch, } from "react-icons/ai";
import {  BsCartFill} from "react-icons/bs";
import "./index.css"

export default function NavbarComponents() {
  return (
    <>
    {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
        <Navbar  bg="light" expand="lg" fixed="top">
          <Container fluid>
          <img src="./images/NavLogo.png" alt="Logo" className='navLogo'/>

            <Navbar.Brand href="#">
              NEOFood</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Menu</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="#action4">Shop</Nav.Link>

                </Nav>
                <Form className="d-flex">
                  {/* <img src='./images/Vector.png' alt="search icon"/> */}
                  <div className='d-flex align-items-center shadow rounded-pill searchBox pe-4'>
                    <AiOutlineSearch size={22}/>

                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 border-0 bg-transparent"
                    aria-label="Search"
                  />
                  <BsCartFill size={22} />
                  <sup>
                    <Badge  bg="danger" className="rounded-circle">
                      0
                    </Badge>
                  </sup>

                  </div>

                  {/* <Button variant="outline-success">Search</Button> */}
                </Form>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      {/* ))} */}

    </>
  )
}
