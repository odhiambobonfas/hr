import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingActions from './components/Layout/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import HRServices from './pages/HRServices';
import ManpowerStaffing from './pages/ManpowerStaffing';
import Recruitment from './pages/Recruitment';
import YouthProgram from './pages/YouthProgram';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/hr" element={<HRServices />} />
            <Route path="/services/manpower" element={<ManpowerStaffing />} />
            <Route path="/services/recruitment" element={<Recruitment />} />
            <Route path="/work-readiness-program" element={<YouthProgram />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch all for other routes */}
            <Route path="*" element={
              <div className="pt-32 container min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
                <p className="text-xl text-slate-500 mb-8">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="btn btn-primary">Go Back Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
