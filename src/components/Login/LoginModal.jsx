import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';
import axios from 'axios';

export default function LoginModal({ handleClose, ...props }) {
    const [email, setEmail] = useState('')
    const instance = axios.create({
        baseURL: 'https://api.metakeep.xyz/v3/getWallet',
        timeout: 1000,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'x-api-key': 'A8swpEVPuLYtQR3x1aJK5Df8+WoqRPLwh4xxsq9PQG3O'
        }
    });
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = (event) => {
        instance.post('', JSON.stringify({ user: { email: email } }))
            .then(res => {

            })
    }
    return (
        <div>

            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmailChange(e)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                    Log In
                </Button>
            </Modal.Footer>

        </div>
    )
}
