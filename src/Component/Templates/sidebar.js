import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../Styles/App.css';
import logo from '../../Images/sm_5b245b62793dd.jpg';
import { Nav, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
        <div className="sidebar fixed-top sidebar-shadow">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <Row className="h-100 d-flex align-items-center">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Link to="/" className="nav-link">
                        <i className="bi bi-house-door"></i>
                    </Link>
                    <Link to="/sekolah" className="nav-link">
                        <i className="bi bi-alexa"></i>
                    </Link>
                    <Link to="/setting" className="nav-link">
                        <i className="bi bi-gear"></i>
                    </Link>
                </Nav>
            </Row>
        </div>
        </>
    );
}