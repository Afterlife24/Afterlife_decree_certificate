import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CertificateDisplay from './components/CertificateDisplay';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/afterlife/:id" element={<CertificateDisplay />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;