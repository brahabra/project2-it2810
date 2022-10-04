import Home from "./pages/Home";
import CommitsPage from "./pages/CommitsPage";
import Navigationbar from "./components/Navigationbar";
import IssuePage from "./pages/IssuePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useContext, useState } from "react";
import { ProjectContext } from "./ProjectContext";
import { Page } from "./components/Navigationbar";
import { LocalStorageClass } from "./WebStorageClass";

function App() {
  const ctx = useContext(ProjectContext);
  const storage = new LocalStorageClass();
  const [page, setPage] = useState<Page>(Page.Home);

  function renderContent() {
    switch (page) {
      case Page.Home: {
        return <Home />;
      }
      case Page.Commits: {
        return <CommitsPage />;
      }
      case Page.Issues: {
        return <IssuePage />;
      }
    }
  }
  function allowPage(page: Page) {
    if (storage.getPropValue("projectToken") === null || storage.getPropValue("projectID") === null) {
      if (page !== Page.Home) {
        alert("Please enter valid projectID and token to access commits and issues!");
      }
      return false;
    }
    return true;
  }

  function checkAndSetPage(page: Page) {
    if (allowPage(page)) {
      setPage(page);
      ctx.projectID = storage.getPropValue("projectID")!;
      ctx.token = storage.getPropValue("projectToken")!;
    }
  }

  return (
    <div className="App">
      <Navigationbar page={page} checkAndSetPage={checkAndSetPage} />
      {renderContent()}
    </div>
  );
}

export default App;
