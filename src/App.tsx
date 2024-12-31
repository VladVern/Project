import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Home from "./components/home/Home"

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </Router>
      )
}

export default App