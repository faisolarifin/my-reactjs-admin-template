import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

export default function DropAction({deleteAction, handleShow, setEdit, setId}) {

    const editAction = () => {
        handleShow();
        setId();
        setEdit(true);
    }

    return (
        <>
        <Dropdown>
            <Dropdown.Toggle variant="outline-primary" size="sm" id="dropdown-basic">
                <i className="bi bi-chevron-expand"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
                <Dropdown.Item onClick={editAction}>Edit</Dropdown.Item>
                <Dropdown.Item onClick={deleteAction}>Hapus</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        </>
    );
}