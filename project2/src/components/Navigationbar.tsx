import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles/Navigationbar.css'
import logo from "../gitlab-logo-400.png"

export default function Navigationbar() {
  return (
    <>

      <nav className="navbar navbar-dark navbar-expand-md bg-background-color justify-content-center">
        <a href="/" className="navbar-brand mr-0">
          <img src={logo} alt="GitLab Logo" />
        </a>
        <div className="justify-content-between align-items-center w-100" >
            <ul className="navbar-nav abs-center-x">
                <li className="nav-item">
                    <a className="nav-link" href="/commits">Commits</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/issues">Issues</a>
                </li>
            </ul>
        </div>
      </nav>

    </>
  )
}
/*
<>
    <nav className="navbar navbar-dark navbar-expand-md bg-background-color justify-content-center">
      <a href="/" className="navbar-brand mr-0">
        <img src={logo} alt="GitLab Logo" />
      </a>
      <div className="navbar-nav text-center">
          <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                  <a className="nav-link" href="/commits">Commits</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/issues">Issues</a>
              </li>
          </ul>
      </div>
    </nav>
    
    <nav className="navbar navbar-light navbar-expand-md bg-dark justify-content-center">
    <a href="/" className="navbar-brand mr-0">
      <img src={logo} alt="GitLab Logo" />
    </a>
    <div className="justify-content-between align-items-center w-100 ">
        <ul className="navbar-nav mx-auto text-center abs-center-x">
            <li className="nav-item active">
                <a className="nav-link" href="/commits">Commits</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/issues">Issues</a>
            </li>
        </ul>
    </div>
</nav>
</>
*/