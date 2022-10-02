import '../styles/Navigationbar.css'
import logo from "../gitlab-logo-400.png"

export default function Navigationbar() {
  return (
      <nav className="navbar navbar-dark navbar-expand bg-background-color">
        <a href="/" className="">
          <img className='navbar-logo' src={logo} alt="GitLab Logo" />
        </a>
        <div className="align-items-center" >
            <ul className="navbar-nav abs-center-nav-link">
                <li className="nav-item">
                    <a className="nav-link" href="/commits">Commits</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/issues">Issues</a>
                </li>
            </ul>
        </div>
      </nav>
  )
}