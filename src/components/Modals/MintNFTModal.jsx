import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useAuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";

export default function MintNFTModal({ handleClose, ...props }) {
    const [email, setEmail] = useState('');
    const { connectWithEmail, address, signMessage, mintNFT, loading, nftResponse } = useAuthContext()
    const navigate = useNavigate();
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = () => {
        // connectWithEmail(email);
        mintNFT(email)
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
                <Modal.Title>Mint NFT to Wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Wallet address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={address} />
                        {loading && <Form.Text className="text-muted">
                            please wait..                        </Form.Text>}
                        {nftResponse && <Form.Text className="text-muted">
                            {nftResponse}                      </Form.Text>}
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
