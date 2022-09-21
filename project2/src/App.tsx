import Home from "./pages/Home";
import CommitsPage from "./pages/CommitsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commits" element={<CommitsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
