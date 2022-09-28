import Home from "./pages/Home";
import CommitsPage from "./pages/CommitsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import IssuePage from "./pages/IssuePage";
import { WebStorageClass } from "./WebStorageClass";
import React from "react";

interface AppContextInterface {
  projectID: string|null;
  token: string|null;
  branchName: string|null;
}

const storage = new WebStorageClass();
export const ProjectContext = React.createContext<AppContextInterface|null>(null);


const appContext = {
  projectID: storage.getPropValue('projectId'),
  token: storage.getPropValue('projectToken'),
  branchName: storage.getPropValue('branchName')
}

function App() {

  return (
    <div className="App">
    <ProjectContext.Provider value={appContext}>
      <Navigationbar/>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commits" element={<CommitsPage />} />
            <Route path="/issues" element={<IssuePage />} />

        </Routes>
      </Router>
    </ProjectContext.Provider>
    </div>
  );
}

export default App;
