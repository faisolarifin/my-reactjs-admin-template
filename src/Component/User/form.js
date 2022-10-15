import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Offcanvas, Button, Form } from 'react-bootstrap';

export default function FormOff({fetchUser, id, show, edit, handleShow, setEdit, toast, setToast}) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [validationError,setValidationError] = useState({});

    useEffect(() => {
        if (!show) {
          setEdit(false)
          setForm({
            name: "",
            email: "",
            password: "",
        });
        }
    }, [show])

    useEffect(() => {
        if (edit) getUser();
    }, [edit])

    const getUser = async () => {
        await axios.get(`http://localhost:8000/api/user/${id}`).then((res) => {
            const resp = res.data;
            setForm({
                ...form,
                name: resp.data.name,
                email: resp.data.email,
            });
        })
    }

    const saveUser = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:8000/api/user", form).then((res) => {
            fetchUser();
            handleShow();
            setToast({
                show: !toast.show,
                message: res.data.message,
            });

        }).catch(({response})=>{
            if(response.status===422){
              setValidationError(response.data.errors)
            }
        })
    }

    const updateUser = async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:8000/api/user/${id}`, Object.assign(form, {
            _method: "PUT",
        })).then((res) => {
            fetchUser();
            handleShow();
            setToast({
                show: !toast.show,
                message: res.data.message,
            });

        }).catch(({response})=>{
            if(response.status===422){
              setValidationError(response.data.errors)
            }
        })
    }

    const onUpdateField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
        <Offcanvas show={show} onHide={handleShow} placement="end" scroll="true">

            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Kelola Sekolah</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="px-4 py-2">
                <Form noValidate onSubmit={edit ? updateUser : saveUser}>
                    <Form.Group className="mb-2" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" value={form.name} onChange={onUpdateField} isInvalid={!!validationError.name} />
                        <Form.Control.Feedback type="invalid">
                            {validationError.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email" value={form.email} onChange={onUpdateField} isInvalid={!!validationError.email} />
                        <Form.Control.Feedback type="invalid">
                            {validationError.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={onUpdateField} isInvalid={!!validationError.password} />
                        <Form.Control.Feedback type="invalid">
                            {validationError.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                    <Button variant="danger" type="reset" className="mt-3 ms-2">
                        Reset
                    </Button>
                </Form>

            </Offcanvas.Body>
        </Offcanvas>

        </>
    );
}