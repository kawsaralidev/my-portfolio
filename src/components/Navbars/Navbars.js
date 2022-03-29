import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbars.css";

const Navbars = () => {
    return (
        <>
            <Navbar className="nav-container" variant="info" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="#home">
                        {/* <img src="https://i.ibb.co/HnPsy5q/kawsar.png" alt="" /> */}
                        <span className="text-color fs-4 ">Ali Portfolio</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-menu" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="nav-menu" as={Link} to="/myprojects">
                            My Projects
                        </Nav.Link>
                        <Nav.Link className="nav-menu" as={Link} to="/aboutme">
                            About Me
                        </Nav.Link>
                        <Nav.Link className="nav-menu" as={Link} to="/contact">
                            Contact Me
                        </Nav.Link>
                        <div>
                            <a
                                target="_blank"
                                className="niche-btn mt-2"
                                href="https://drive.google.com/file/d/1P7xmaH1XtkMhGROTIBaFSp9aNSUXqvG7/view?usp=sharing"
                                rel="noreferrer"
                            >
                                Download Resume
                            </a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbars;
