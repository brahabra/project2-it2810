import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Container } from "@mui/material";
import '../styles/Navigationbar.css'

export default function Navigationbar() {
    return (
        <>
            <Navbar style={{display:'flex', justifyContent: 'center'}} bg="background-color" variant='dark'>
                <Navbar.Brand href='/'>
                    Logo
                </Navbar.Brand>
                <Nav>
                    <Nav.Link  href='/commits'>Commits</Nav.Link>
                    <Nav.Link href='/issues'>Issues</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
