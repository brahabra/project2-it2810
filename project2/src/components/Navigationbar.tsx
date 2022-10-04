import '../styles/Navigationbar.css'
import logo from "../gitlab-logo-400.png"
import { LocalStorageClass } from '../WebStorageClass';
import { Button } from "@mui/material";
import { style } from "../styles/Styles";


export enum Page {
  Home, Commits, Issues
}

interface Props {
  page: Page, 
  checkAndSetPage: (value: Page) => void
}

export default function Navigationbar(props:Props){
  const storage = new LocalStorageClass();
  
  return (
    
      <nav className="navbar navbar-dark navbar-expand bg-background-color">
        <img className='navbar-logo' src={logo} alt="GitLab Logo" />
        
        <div className="align-items-center" >
            <ul className="navbar-nav abs-center-nav-link">
                <li className="nav-item">
                <Button sx={style.navbarButton} onClick={() => props.checkAndSetPage(Page.Home)}>Home</Button>
                </li>
                <li className="nav-item">
                <Button sx={style.navbarButton} onClick={() => props.checkAndSetPage(Page.Commits)}>Commits</Button>
                </li>
                <li className="nav-item">
                <Button sx={style.navbarButton} onClick={() => props.checkAndSetPage(Page.Issues)}>Issues</Button>
                </li>
            </ul>
        </div>
      </nav>
  )
}