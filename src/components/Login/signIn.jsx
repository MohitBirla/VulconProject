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

import { Box, Typography, Grid } from '@mui/material';

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
      <Box className='main_1'>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box className='main-2'>
            <Box className='innerLogin'>
              <Typography variant="h1" style={{ fontSize: '45px', fontWeight: 'bold', color: "#06CDFD" }}>SIGN <Typography className='d-inline' variant="h1" style={{ fontSize: '45px', fontWeight: 'bold', color:"white" }}>IN</Typography></Typography>
              <Typography variant="p" className='d-block text-white mt-3' >Login to your account</Typography>
              <Button type='button' variant="contained" onClick={() => signMessage()} startIcon={<EmailIcon />} className='login_btn mt-4'>LOGIN WITH EMAIL</Button>

              <Typography variant="p" className='d-block fs-5 fw-bold mt-3 text-white' style={{}}>OR</Typography>
              {account.isConnected ? <Typography variant="h1">
                <Box className='fw-bold'>
                  {account.address.slice(0, 5)}

                </Box>
              </Typography> :
                <Box className=' fw-bold  mt-2'>
                  <Button type='button' variant="contained" startIcon={<WalletIcon />} className='login_btn' onClick={() => open()}>CONNECT WALLET</Button>

                </Box>

              }
            <img src='./images/metaLogo.png' style={{width:"180px" , height:"50px"}} className='mt-4'></img>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={0} md={8}>
          <Box className='text-center'>
          <Typography className='wellCome text-center fw-bold' variant="h1">WELCOME</Typography>
          <Typography className='wellCome2' variant="p" >TO WORLD@META</Typography>

          </Box>
          

        </Grid>

      </Grid>
      </Box>
     

      <Web3Modal config={config} />
      <Modal show={show} onHide={handleClose}><LoginModal handleClose={() => handleClose()} /></Modal>
    </Box>
  )
}
