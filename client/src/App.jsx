import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage';
import FinanceScreen from "./pages/Finance";
import Workshop from './pages/Workshop';
import WorkshopDetail from './components/WorkshopDetail';
import BlogInfo from './pages/BlogPage';
import NetworkingHub from "./pages/NetworkingHub";
import ComingSoon from "./components/ComingSoon";
import FAQSection from './components/FAQsection';



function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<sDashboard />} />
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/workshop-detail" element={<WorkshopDetail />} />
        <Route path="/finance" element={<FinanceScreen />} />
        <Route path="/blog" element={<BlogInfo />} />
        <Route path="/networking-hub" element={<NetworkingHub />} />
        <Route path="/coming-soon" element={<ComingSoon />}  />
        <Route path="/faqs" element={<FAQSection />}  />
      </Routes>
    </Router>
    {/* <FinanceScreen /> */}

    </>
  );
}

export default App
