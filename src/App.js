import React from "react";

import "./App.css";
import Header from "./components/Header";
import Extension from "./pages/extension";
import Rates from "./pages/ratesandcalc";
import RatesExtension from "./pages/ratesExtension";




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rates />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/ratesandcalc" element={<Rates />} />
        <Route path="/ratesExtension" element={<RatesExtension />} />
      </Routes>
    </Router>
  );
}

export default App;
