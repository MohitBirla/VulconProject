import React, { useState, useEffect } from 'react'
import { BsGoogle } from "react-icons/bs";
import { BsWalletFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { Web3Modal } from '@web3modal/react'
import { Web3Button, useAccount, useConnectModal } from '@web3modal/react';
import Modal from 'react-bootstrap/Modal';
import LoginModal from './LoginModal';
import { useAuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import WalletIcon from '@mui/icons-material/Wallet';

import { Box, Typography } from '@mui/material';

const config = {
  projectId: '77a7ee281a308d086ddd3e231804d56d',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}

export default function SignIn() {
  const [show, setShow] = useState(false);
  const { isOpen, open, close } = useConnectModal()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { account } = useAccount()
  const navigate = useNavigate();
  const { connectWithEmail, address, connect, signMessage } = useAuthContext()
  useEffect(() => {
    console.log(account)
    if (account.address) {
      connect(account.address, 1)
      navigate('/profile')
    }
    // eslint-disable-next-line
  }, [account]);

  useEffect(() => {
    console.log(account)
    if (address) {
      connect(address, 1)
      navigate('/profile')
    }
    // eslint-disable-next-line
  }, [address]);
  return (
    <Box className='main_login'>
      <Box className='main-2'>
        <Box>
          <Typography variant="h1" style={{ fontSize: '45px', fontWeight: 'bold', fontFamily: "Beatrix Antiqua" }}  >SIGN IN</Typography>
          <Typography variant="p" >Login to your account</Typography>
          <Button type='button' variant="contained" onClick={() => signMessage()} startIcon={<EmailIcon />} className='login_btn mt-4'>LOGIN WITH EMAIL</Button>

          <Typography variant="p" className='d-block fs-5 fw-bold mt-3' style={{}}>or</Typography>
          {account.isConnected ? <Typography variant="h1">
            <Box className='fw-bold p-2 mt-2'>
              {account.address.slice(0, 5)}

            </Box>
          </Typography> :
            <Box className=' fw-bold p-2 mt-2'>
              <Button type='button' variant="contained" startIcon={<WalletIcon />} className='login_btn' onClick={() => open()}>CONNECT WALLET</Button>

            </Box>

          }
        </Box>
        <img src='./images/worldmetalogo.png' className='mt-5'></img>
      </Box>
      <Web3Modal config={config} />
      <Modal show={show} onHide={handleClose}><LoginModal handleClose={() => handleClose()} /></Modal>
    </Box>
  )
}
