import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MonitoringPage from "./pages/MonitorPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/monitor" element={<MonitoringPage />} />
      </Routes>
    </Router>
  );
}

export default App;
