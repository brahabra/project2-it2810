import "../styles/Navigationbar.css";
import logo from "../img/gitlab-logo-400.png";
import { Button } from "@mui/material";
import { style } from "../styles/Styles";

export enum Page {
  Home,
  Commits,
  Issues,
}

//Properties for navbar component
interface Props {
  page: Page;
  checkAndSetPage: (value: Page) => void;
}

//Navigationbar component.
export default function Navigationbar(props: Props) {
  return (
    <nav className="navbar navbar-dark navbar-expand bg-background-color">
      <img
        className="navbar-logo"
        src={logo}
        alt="GitLab Logo"
        onClick={() => props.checkAndSetPage(Page.Home)}
      />
      <div className="align-items-center">
        <ul className="navbar-nav abs-center-nav-link">
          <li className="nav-item">
            <Button
              sx={style.navbarButton}
              onClick={() => props.checkAndSetPage(Page.Home)}
            >
              Home
            </Button>
          </li>
          <li className="nav-item">
            <Button
              sx={style.navbarButton}
              onClick={() => props.checkAndSetPage(Page.Commits)}
            >
              Commits
            </Button>
          </li>
          <li className="nav-item">
            <Button
              sx={style.navbarButton}
              onClick={() => props.checkAndSetPage(Page.Issues)}
            >
              Issues
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
