import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <>
            <Navbar bg="dark" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container >

                    <Navbar.Brand to="#home"> <span className="text-info fs-3">Ali Portfolio</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white fs-5" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white fs-5" as={Link} to="/myprojects">My Projects</Nav.Link>
                        <Nav.Link className="text-white fs-5" as={Link} to="/aboutme">About Me</Nav.Link>
                        <Nav.Link className="text-white fs-5" as={Link} to="/contact">Contact Me</Nav.Link>
                        <Nav.Link className="text-white fs-5" as={Link} to="/blog">Blog</Nav.Link>
                        
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>
        </>

    );
};

export default Navbars;