import React, { useState } from 'react'
import { BsGoogle } from "react-icons/bs";
import { BsWalletFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { Web3Modal } from '@web3modal/react'
import { Web3Button, useAccount } from '@web3modal/react';
import Modal from 'react-bootstrap/Modal';
import LoginModal from './LoginModal';

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
  document.getElementById('example')
  return (
    <div className='main-container' style={{ overFlow: 'hidden' }}>
      <div className='row'>
        <div className='col loginMain' style={{ backgroundColor: "#853225", margin: '1% 0% 1% 1%', borderRadius: '2%' }}>
          <div style={{}}>
            <div className=''>
              <Form style={{ padding: "5% 7% 40% 7%" }}>
                <p className='text-white fw-bold '>XYZ Forged</p>
                <h1 className='text-white fw-bold pt-2 pb-2'>Sign in</h1>
                <p className='text-white mt-3 ' style={{ letterSpacing: "2px" }}>Sign In to your account by filling following details.</p>
                <div className="div" style={{ marginLeft: '33%' }}>
                  <button type='button'
                    className='loginsBtn fw-bold p-2 mt-4'
                    style={{ backgroundColor: "#4FA095", color: "#27262C", }}
                    onClick={() => handleShow()} >
                    Login with Email
                  </button>
                </div>

                <h6 className='text-white my-2 text-center mt-4 fw-bold'>OR</h6>
                {account.isConnected ? <h1>
                  <div className=' fw-bold p-2 mt-2' style={{ marginLeft: '33%' }}  >
                    {account.address.slice(0, 5)}
                  </div>
                </h1> :
                  <div className=' fw-bold p-2 mt-2' style={{ marginLeft: '33%' }}  >
                    <Web3Button class='' />
                  </div>

                }
                {/* <label className='text-white mt-3' style={{letterSpacing:"2px"}}>Forgot your password? <a href='#' style={{color:'orange',textDecoration:'none'}}>Reset Now</a> </label> */}
              </Form>
            </div>
          </div>
        </div>
        <div className='col-8'>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators" >
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img style={{ width: '1090px', height: '640px' }} src="/images/slide-1.webp" class="d-block " alt="..." />
              </div>
              <div class="carousel-item">
                <img style={{ width: '1090px', height: '640px' }} src="/images/slide-2.webp" class="d-block" alt="..." />
              </div>
              <div class="carousel-item">
                <img style={{ width: '1090px', height: '640px' }} src="/images/slide-3.webp" class="d-block" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Web3Modal config={config} />
      <Modal show={show} onHide={handleClose}><LoginModal handleClose={() => handleClose()} /></Modal>
    </div>
  )
}
