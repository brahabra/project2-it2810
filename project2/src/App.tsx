import Home from "./pages/Home";
import CommitsPage from "./pages/CommitsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Navigationbar/>
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
