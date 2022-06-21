import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";
import Help from "./pages/Help/Help";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} >
              <Route index element={<Catalog/>} />
              <Route path="about" element={<About/>} />
              <Route path="faq" element={<Faq/>} />
              <Route path="help" element={<Help/>} />
          </Route>
        </Routes>
      </Router>

  );
}

