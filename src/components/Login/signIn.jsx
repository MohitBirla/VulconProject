import React, { useState, useEffect } from 'react'
import { BsGoogle } from "react-icons/bs";
import { BsWalletFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { Web3Modal } from '@web3modal/react'
import { Web3Button, useAccount } from '@web3modal/react';
import Modal from 'react-bootstrap/Modal';
import LoginModal from './LoginModal';
import { useAuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { account } = useAccount()
  const navigate = useNavigate();
  const { connectWithEmail, address, connect } = useAuthContext()
  useEffect(() => {
    console.log(account)
    if (account.address) {
      connect(account.address, 1)
      navigate('/profile')
    }
    // eslint-disable-next-line
  }, [account]);
  return (
    <div className='main_login'>
        <div className='main-2 mt-4'>
          <div>
            <h1>SIGN IN</h1>
            <p>Login to your account</p>
            <Button type='button' variant="contained" onClick={() => handleShow()} startIcon={<EmailIcon/>} className='login_btn mt-3'>LOGIN WITH EMAIL</Button>
    
            <p className='mt-3 fs-5' style={{}}>or</p>
            {account.isConnected ? <h1>
                  <div className='fw-bold p-2 mt-2'   >
                    {account.address.slice(0, 5)}

                  </div>
                </h1> :
                  <div className=' fw-bold p-2 mt-2 ms-5'>
                    <Web3Button class='' />
            <Button type='button' variant="contained" startIcon={<EmailIcon/>} className='login_btn'>CONNECT WALLET</Button>

                  </div>

                }
          </div>
            <img src='./images/worldmetalogo.png' className='mt-5'></img>
        </div>
        <Web3Modal config={config} />
      <Modal show={show} onHide={handleClose}><LoginModal handleClose={() => handleClose()} /></Modal>
      </div>
  )
}
