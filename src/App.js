import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbarr";
import {
  Inicio,
  Motocicletas,
  Camionetas,
  Automoviles,
  Enduro,
} from "./components/pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/motocicletas" element={<Motocicletas />} />
        <Route path="/camionetas" element={<Camionetas />} />
        <Route path="/automoviles" element={<Automoviles />} />
        <Route path="/enduro" element={<Enduro />} />
        <Route path="/" element={<Inicio />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

// import Navbar from "./components/Navbarr";
// import Inicio from "./components/pages/Inicio";
// import Motocicletas from "./components/pages/Motocicletas";
// import Camionetas from "./components/pages/Camionetas";
// import Automoviles from "./components/pages/Automoviles";
// import Enduro from "./components/motocicletas/enduro/Enduro";
// import Footer from "./components/Footer";
