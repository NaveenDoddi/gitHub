import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

function NavbarGit() {

  return (
    <>

    {/* navbar for the top of the page */}
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="#" className='text-primary'><img style={{height: "40px"}} src="ikranthiLogo.jpg"/>Kranthi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-primary border-primary"
              aria-label="Search"
              id='input'
              
              
            />
          {/* <Button variant="outline-primary" onClick={searching}>Search</Button> */}
          </Form>
          <NavDropdown title="☰" className='btn text-danger'>
              <NavDropdown.Item href="#action3">login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                help
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                about
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default NavbarGit;