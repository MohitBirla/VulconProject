import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useAuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";

export default function TransferNFTModal({ handleClose, ...props }) {
    const [email, setEmail] = useState('');
    const { connectWithEmail, address, signMessage } = useAuthContext()
    const navigate = useNavigate();
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = () => {
        // connectWithEmail(email);
        signMessage(email)
    }

    useEffect(() => {
        if (address) {
            navigate('/profile')
        }
        // eslint-disable-next-line
    }, [address]);
    return (
        <div className=''>

            <Modal.Header closeButton>
                <Modal.Title>Mint NFT to Email</Modal.Title>
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
                    Mint
                </Button>
            </Modal.Footer>

        </div>
    )
}
