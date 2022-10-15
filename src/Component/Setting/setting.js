import React from "react";
import Navibar from "../Templates/navbar";
import Sidebar from "../Templates/sidebar";
import { Breadcrumb, Row, Col, Container } from "react-bootstrap";

export default function Setting() {
    return (
        <>
        <Navibar />
        <Sidebar />
        <div className="begin">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Setting</Breadcrumb.Item>
                </Breadcrumb>

                <div className="main-begin begin-shadow">
                    <Row>
                        <Col>
                            <h2>Setting Page</h2>
                        </Col>
                    </Row>
                </div>
            </Container>    
        </div>
        </>
    );
}