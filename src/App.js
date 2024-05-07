import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Age from "./pages/Age";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="/Age/:age" element={<Age />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
