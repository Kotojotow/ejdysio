import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Footer from './Footer';
import GrafikApp from './GrafikApp';

const RoutesApp = () => {

  return (
    <div className='RoutesApp'>
    <h1 className='hidden'>ejdys</h1>
    <Router>
    <Routes>
        <Route path="/production" element={<App />} />
        <Route path="/grafik" element={<GrafikApp />} />
        {/* <Route path="*" element={<App />} /> */}
    </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default RoutesApp;