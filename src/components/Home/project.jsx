import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import SignIn from '../Login/signIn';
import { useAuthContext } from '../../providers/AuthProvider';
import Dashboard from '../Main/Dashboard';
import logo from './../../assets/worldmetalogo.png'

export function shorten(str) {
    if (str.length < 10) return str;
    return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}

function Project(props) {

    const { connectWithEmail, address } = useAuthContext()
    return (
        <>
            <Router>
                <Navbar bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="#" className='text-white'>World@Meta</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Form className="d-flex">
                                <div className="link">{
                                    address ? <span className='text-white'>{shorten(address)}</span> : <Link to='/signIn'>
                                        <button type='button' className='text-white fw-bold ps-4 pe-4 rounded-2' style={{ backgroundColor: "rgb(70 155 244)", color: "#27262C", width: '100%', height: '100%', fontSize: '1.20rem' }}>
                                            Login
                                        </button>
                                    </Link>
                                }

                                </div>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/profile" element={<Dashboard/>} />
                </Routes>
            </Router>
        </>



    );
}

export default Project;


