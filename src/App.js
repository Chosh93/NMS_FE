import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MonitoringPage from "./pages/MonitorPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/monitor" element={<MonitoringPage />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
