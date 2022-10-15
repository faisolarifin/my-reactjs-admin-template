import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/App.css';
import user from '../../Images/default29.webp';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';

export default function Navibar() {
    return (
        <>
        <Navbar bg="white" expand="lg" fixed="top" className="navbar-shadow">
            <Container fluid>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link active href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>

                <Dropdown className="user-profile">
                    <Dropdown.Toggle variant="white" id="dropdown-basic" className="px-4">
                        <img src={user} className="rounded-circle" alt="..." />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className="d-flex p-2 align-items-center">
                            <div className="img-profile me-2">
                                <img src={user} className="rounded-circle" alt="..." />
                            </div>
                            <div className="d-flex flex-column title-profile">
                                <strong>Faisol S.Kom</strong>
                                <small>Admin</small>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>

        </>
    );
}