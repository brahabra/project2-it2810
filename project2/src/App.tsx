import Home from "./pages/Home";
import Commits from "./pages/CommitsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Commits/>
     {/*  <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commits" element={<Commits />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
