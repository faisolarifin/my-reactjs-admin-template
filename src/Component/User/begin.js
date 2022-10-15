import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, Breadcrumb, Row, Col, Table, Button, Alert } from 'react-bootstrap';
import DropAction from "../Templates/dropaction";
import FormOff from "./form";
import ToastNotif from "../Templates/toast";

export default function Begin() {

    //state for id when edit action
    const [id, setId] = useState();
    //state for user data from api
    const [user, setUser] = useState([]);
    //state for offcanvas dsplay
    const [show, setShow] = useState(false);
    //state for status form (add/edit)
    const [edit, setEdit] = useState(false);
    //state for toast
    const [toast, setToast] = useState({
        show: false,
        message: "",
    });
    const toastState = {toast, setToast};
    //state for alert message
    const [alert, setAlert] = useState("");
    
    const handleShow = () => setShow(!show);
    const setAlertMsg = () => setAlert("Server sedang mengalami masalah, silahkan coba lagi nanti!");

    const state = {id, show, edit, handleShow, setEdit, setAlert};

    useEffect(() => {
        fetchUser();
    },[]);

    const fetchUser = async () => {
        await axios.get("http://localhost:8000/api/user").then((res)=>{
            const resp = res.data;
            setUser(resp.data);
        })
        .catch(({error}) => {
            setAlertMsg();  
        });
    }

    const deleteAction = async (id) => {
        await axios.delete(`http://localhost:8000/api/user/${id}`).then((res)=>{
            fetchUser();
            setToast({
                show: !toast.show,
                message: res.data.message,
            });
        })
        .catch(({error}) => {
            setAlertMsg();
        });
    }

    return (
        <>
        <div className="begin">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>

                {
                    !!alert && (
                        <Alert variant="danger" onClose={() => {setAlert("")}} dismissible>
                            <Alert.Heading>Oh snap! Server an error!</Alert.Heading>
                            <p className="mb-0">
                                {alert}
                            </p>
                        </Alert>
                    )
                }

                <div className="main-begin begin-shadow">
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between align-content-center mb-2">
                                <h5>Data Sekolah</h5>
                                <div>
                                    <Button variant="primary" size="sm" onClick={handleShow}>Tambah</Button>
                                </div>
                            </div>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th colSpan={2}>Email Verified</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    user.length > 0 && user.map((row, index)=>(
                                        <tr key={index}>
                                            <td>{++index}</td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.email_verified_at}</td>
                                            <td width={50}>
                                                <DropAction deleteAction={() => deleteAction(row.id)} setId={() => setId(row.id)} {...state} />
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </Container>    
        </div>
        {/* Offcanvas Form */}
        <FormOff fetchUser={fetchUser} {...state} {...toastState} />   
        {/* Toast Notification */}
        <ToastNotif {...toastState} />
        </>
    );
}