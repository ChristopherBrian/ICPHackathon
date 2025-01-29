import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LivePolling from './pages/LivePolling';

function App() {

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-polling" element={<LivePolling />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;