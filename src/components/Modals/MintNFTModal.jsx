import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useAuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";
import { Box, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


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
        <>
            {/* <div class="modal" tabindex="-1" closeButton>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <Box sx={{ background: "#28366C" }}>
                <Modal.Header>
                    <Modal.Title style={{ display: "d-flex" }}> <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', fontStyle: "italic" }}
                        sx={{
                            display: "inline",
                            color: "white",
                            fontFamily: "Roboto,Helvetica,Arial,sans-serif",

                        }}> Mint  NFT to </Typography> <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', fontStyle: "italic" }}
                            sx={{
                                display: "inline",
                                color: "#06CDFD",
                                fontFamily: "Roboto,Helvetica,Arial,sans-serif",

                            }}> Wallet</Typography></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: "white" }}>Wallet address</Form.Label>
                            {/* <Form.Control type="email" placeholder="Enter email" value={address} /> */}
                            <TextField
                                className="profile_input  "
                                sx={{ mt: 1, "& fieldset": { border: 'none' }, }}
                                id="outlined-textarea"
                                placeholder="Address"
                                inputProps={{ style: { color: "white" } }}
                                value={address}
                                multiline
                                fullWidth
                            />
                        </Form.Group>
                    </Form>

                    {loading && 
                    <Typography component="div" >
                        please wait..                        
                    </Typography>}
                    {nftResponse &&
                        <Box whiteSpace="normal" noWrap>
                            <Typography component="div" sx={{ width: "30%", color: "white",textAlign: 'center' }}>
                                {nftResponse}
                                {/* rdtfdtuyfiiiiiyyyyyyyyyyyyyyyyyyyyyyyyyyyyydddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
                            </Typography>
                        </Box>
                    }

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                        Mint
                    </Button>
                </Modal.Footer>
            </Box>

        </>

    )
}