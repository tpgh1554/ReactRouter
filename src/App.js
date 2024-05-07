import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Age from "./pages/Age";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
          <Route path="/Age/:age" element={<Age />}></Route>
        </Route>
        <Route path="/Articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
