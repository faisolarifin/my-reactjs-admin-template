import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, Toast } from 'react-bootstrap';

export default function ToastNotif({toast, setToast}) {

    return (
        <>
        <ToastContainer className="p-3" position="bottom-end">
          <Toast show={toast.show} onClose={() => setToast({show:!toast.show})} delay={5000} autohide>
            <Toast.Header>
              <i className="bi bi-info-circle"></i>
              <strong className="ms-1 me-auto">Message</strong>
              <small>2 secs ago</small>
            </Toast.Header>
            <Toast.Body>{toast.message}</Toast.Body>
          </Toast>
        </ToastContainer>
        </>
    );
}