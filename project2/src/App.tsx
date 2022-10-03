import Home from "./pages/Home";
import CommitsPage from "./pages/CommitsPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import IssuePage from "./pages/IssuePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContext";

function App() {
  const ctx = useContext(ProjectContext);

  return (
    <div className="App">
      <Navigationbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commits" element={(ctx.projectID == "" || ctx.token == "") ? <Navigate to="/" /> :  <CommitsPage/> }/>
          <Route path="/issues" element={(ctx.projectID == "" || ctx.token == "") ? <Navigate to="/" /> :  <IssuePage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
