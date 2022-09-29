import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Container } from "@mui/material";
import '../styles/Navigationbar.css'
import logo from "../gitlab-logo-400.png"

export default function Navigationbar() {
  return (
    <>
      <Navbar style={{display:'flex', justifyContent: 'center'}} bg="background-color" variant='dark'>
        <Navbar.Brand href='/'>
          <img src={logo} alt="GitLab Logo" />
        </Navbar.Brand>
        <div className='nav'>
          <Nav>
            <Nav.Link  href='/commits'>Commits</Nav.Link>
            <Nav.Link href='/issues'>Issues</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  )
}
