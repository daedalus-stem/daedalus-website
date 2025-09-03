import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import Car from "./pages/Car";
import Games from "./pages/Games";

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/car" element={<Car />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
  </div>
);

export default App;
